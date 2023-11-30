import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './src/deskStructure'
import {media} from 'sanity-plugin-media'
import {resolveProductionUrl} from './src/actions/resolveProductionUrl'

const plugins = [
  deskTool({
    structure: structure,
  }),
  // dashboardTool({widgets: [projectInfoWidget(), projectUsersWidget()]}),
  media(),
  visionTool(),
]

export default defineConfig({
  name: 'default',
  title: 'Olivier Lellouche Design Workshop',

  projectId: 'na80rqjb',
  dataset: 'production',

  plugins: plugins,

  schema: {
    types: schemaTypes,
  },
  document: {
    // productionUrl: resolveProductionUrl,
    actions: [resolveProductionUrl],
  },
})
