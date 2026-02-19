import {type DefaultDocumentNodeResolver} from 'sanity/structure'
import {type SanityDocument} from 'sanity'

const remoteURL = 'https://combo-cafe.vercel.app/'
const localURL = 'http://localhost:3000/'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

// Customise this function to show the correct URL based on the current document
// function getPreviewUrl(doc: SanityDocument) {
//   // const {_type, slug} = doc
//   // console.log(location.origin)
//   // let pagePath = `?slug=${doc?.slug?.current}&type=${doc._type}`

//   return doc?.slug?.current
//     ? `${previewURL}?slug=${doc?.slug?.current}&type=${doc._type}`
//     : `${previewURL}`
// }

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `home`:
    case `pageModulaire`:
      return S.document().views([S.view.form()])
    default:
      return S.document().views([S.view.form()])
  }
}
