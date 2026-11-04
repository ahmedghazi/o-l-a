import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityReference,
} from 'sanity-codegen'
import type { Project } from './schema'

export interface ProjectExtend extends Project {
  imageCover: SanityKeyed<{
    _type: 'image'
    _key: string
    // asset: SanityReference<SanityImageAsset>
    asset: SanityImageAsset
    // crop?: SanityImageCrop
    // hotspot?: SanityImageHotspot
  }>
}
