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

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0]{
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
}`)

export const LANDING_QUERY = defineQuery(`*[_type == "landing"][0]{
  ...,
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  },
  image{
    ...,
    asset->
  }
}`)

export const HOME_QUERY = defineQuery(`*[_type == "home"][0]{
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
}`)

export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  ...,
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  },
  title,
  year,
  text,
  media[]{
    ...,
    asset->
  }
}`)

export const INFOS_QUERY = defineQuery(`*[_type == "infos"][0]{
  ...,
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  }
}`)
