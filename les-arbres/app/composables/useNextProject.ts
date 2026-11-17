import type { Ref } from 'vue'
import type { Project } from '~/types/schema'

const DEFAULT_TITLE = 'Olivier Lellouche Design Workshop'

// Infinite project loading: reaching the bottom appends the next project
export const useNextProject = (
  initial: Project,
  projects: Ref<Project[] | null | undefined>,
) => {
  const items = ref<Project[]>([initial])
  const currentSlug = ref(initial.slug?.current)
  const sentinel = ref<HTMLElement | null>(null)
  const activePath = useState<string>('activePath')
  let bottomObserver: IntersectionObserver | null = null
  let viewObserver: IntersectionObserver | null = null

  const nextProject = computed<Project | null>(() => {
    // The nav can reference the same project twice, keep the first one
    const list = (projects.value || []).filter(
      (p, i, all) => all.findIndex((q) => q._id === p._id) === i,
    )
    if (!list.length) return null
    const last = items.value[items.value.length - 1]
    const index = list.findIndex((p) => p.slug?.current === last?.slug?.current)
    const next = list[(index + 1) % list.length]
    // Stop once every project has been shown
    if (!next || items.value.some((p) => p._id === next._id)) return null
    return next
  })

  const setUrl = (project: Project) => {
    const slug = project.slug?.current
    if (!slug || slug === currentSlug.value) return
    currentSlug.value = slug
    const path = `/p/${slug}`
    // Keep vue-router's history state so back/forward still work
    window.history.replaceState({ ...window.history.state, current: path }, '', path)
    activePath.value = path
    document.title = project.seo?.metaTitle || DEFAULT_TITLE
  }

  // Sync the URL with whichever project is in view (scrolling back up)
  const observeItems = () => {
    document.querySelectorAll<HTMLElement>('.project-item').forEach((el) => {
      viewObserver?.observe(el)
    })
  }

  const loadNext = async () => {
    const next = nextProject.value
    if (!next) return
    setUrl(next)
    items.value.push(next)
    await nextTick()
    observeItems()
  }

  onMounted(() => {
    viewObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = (entry.target as HTMLElement).dataset.id
          const project = items.value.find((p) => p._id === id)
          if (project) setUrl(project)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    observeItems()

    bottomObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) loadNext()
    })
    if (sentinel.value) bottomObserver.observe(sentinel.value)
  })

  onUnmounted(() => {
    bottomObserver?.disconnect()
    viewObserver?.disconnect()
  })

  return { items, nextProject, sentinel }
}
