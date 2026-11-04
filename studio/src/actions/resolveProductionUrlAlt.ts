const remoteURL = 'https://o-l-a.vercel.app/api/preview'
const localURL = 'http://localhost:3000/api/preview'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export function resolveProductionUrlAlt(props: any): Promise<string | undefined> {
  console.log('props', props)
  if (!props._type) {
    return Promise.resolve(undefined)
  }
  console.log(props)
  const {slug, _type} = props

  return Promise.resolve(`${previewURL}/?slug=${slug?.current}&type=${_type}`)
}
