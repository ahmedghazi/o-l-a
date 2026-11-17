import { projectContent } from './fragments'

const groq = String.raw

const projectCard = `
  _type,
  slug,
  title,
  year,
  coverImage{
    ...,
    asset->
  }
`

export const SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  ...,
  nav[]->{
    _type == 'project' => {
      _type,
      slug,
      title,
      year,
      localisation,
      materials,
      'imageCover': media[0]{
        ...,
        asset->
      }
    },
  },
}`

export const HOME_QUERY = groq`*[_type == "home"][0]{
  ...,
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  },
  randomImages[]{
    ...,
    asset->
  }
}`

// Same order as the settings nav
export const ALL_PROJECTS_QUERY = groq`*[_type == "settings"][0].nav[@->_type == "project"]->{
  ${projectContent}
}`

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
  ${projectContent}
}`

export const INFOS_QUERY = groq`*[_type == "infos"][0]{
  ...,
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  }
}`
