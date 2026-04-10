import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image aléatoire — `array`
   *
   *
   */
  randomImages?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
}

/**
 * Réglages (header, footer, ...)
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Nom du site — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Nav — `array`
   *
   *
   */
  nav?: Array<SanityKeyedReference<Project>>;

  /**
   * Message 404 — `blockContent`
   *
   *
   */
  message404?: BlockContent;

  /**
   * customCss — `text`
   *
   *
   */
  customCss?: string;
}

/**
 * Infos
 *
 *
 */
export interface Infos extends SanityDocument {
  _type: "infos";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Bio — `blockContent`
   *
   *
   */
  bio?: BlockContent;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * CV — `array`
   *
   *
   */
  cv?: Array<SanityKeyed<KeyValGroup>>;
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Localisation — `string`
   *
   *
   */
  localisation?: string;

  /**
   * materials — `string`
   *
   *
   */
  materials?: string;

  /**
   * Year — `date`
   *
   *
   */
  year?: string;

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent;

  /**
   * Liens — `array`
   *
   *
   */
  links?: Array<SanityKeyed<LinkExternal>>;

  /**
   * media — `array`
   *
   *
   */
  media?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
}

/**
 * Tag
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: "tag";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

export type BlockContent = Array<SanityKeyed<SanityBlock>>;

export type LinkInternal = {
  _type: "linkInternal";
  /**
   * label — `string`
   *
   *
   */
  label?: string;

  /**
   * link — `reference`
   *
   *
   */
  link?: SanityReference<Home | Project>;
};

export type LinkExternal = {
  _type: "linkExternal";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta title — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta description — `string`
   *
   *
   */
  metaDescription?: string;

  /**
   * Meta image — `image`
   *
   *
   */
  metaImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type KeyVal = {
  _type: "keyVal";
  /**
   * Accr — `string`
   *
   *
   */
  accr?: string;

  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Url — `string`
   *
   *
   */
  url?: string;
};

export type KeyValGroup = {
  _type: "keyValGroup";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<KeyVal>>;
};

export type Documents = Home | Settings | Infos | Project | Tag;
