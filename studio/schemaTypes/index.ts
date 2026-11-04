import home from './singletons/home'
import settings from './singletons/settings'
import infos from './singletons/infos'
import post from './documents/project'
import tag from './documents/tag'

import blockContent from './objects/blockContent'
import linkInternal from './objects/linkInternal'
import linkExternal from './objects/linkExternal'
import seo from './objects/seo'
import keyVal from './objects/keyVal'
import keyValGroup from './objects/keyValGroup'

export const schemaTypes = [
  home,
  settings,
  infos,
  post,
  tag,

  blockContent,
  linkInternal,
  linkExternal,
  seo,
  keyVal,
  keyValGroup,
]

export default schemaTypes
