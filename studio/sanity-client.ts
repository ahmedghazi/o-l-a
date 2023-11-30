import {createClient} from '@sanity/client'
// import {apiVersion, dataset, projectId, useCdn} from './sanity.api'

export const sanityConfig = {
  projectId: 'na80rqjb',
  dataset: 'production',
}

export const client = createClient({
  projectId: 'na80rqjb',
  dataset: 'production',
})
