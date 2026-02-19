// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return !['home', 'landing', 'media.tag', 'project', 'settings', 'tag', 'infos'].includes(id)
}

export const structure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Réglages (header, footer, ...)')
        .schemaType('settings')
        .child(
          S.editor()
            .title('Réglages (header, footer, ...)')
            .schemaType('settings')
            .documentId('settings'),
        ),
      S.divider(),

      S.listItem()
        .title('Accueil')
        .schemaType('home')
        .child(S.editor().title('Home').schemaType('home').documentId('home')),

      S.divider(),

      // S.listItem()
      //   .title('Projects')
      //   .schemaType('project')
      //   .child(S.editor().title('Project').schemaType('project').documentId('project')),
      // S.divider(),

      // S.listItem().title('Projects').schemaType('project').child(S.documentTypeList('project')),
      S.listItem().title('Projects').schemaType('project').child(S.documentTypeList('project')),

      // S.divider(),

      // S.divider(),

      // S.listItem().title('Projects').schemaType('project').child(S.documentTypeList('project')),

      // S.divider(),

      /**
       * with seo preview
       */

      // S.listItem()
      //   .title('Projets liste')
      //   .schemaType('project')
      //   .child(
      //     S.documentTypeList('project').child((id) =>
      //       S.document().schemaType('project').documentId(id).views([
      //         // The default form for editing a document
      //         S.view.form(),

      //         // Render the current selected document’s values as JSON
      //         // S.view.component(SeoPreview).title('Seo preview').options({previewURL}),
      //       ]),
      //     ),
      //   ),

      // S.listItem().title('Tags').schemaType('tag').child(S.documentTypeList('tag')),
      // S.divider(),

      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
