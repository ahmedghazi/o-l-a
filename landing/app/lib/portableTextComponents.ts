import type { PortableTextComponents } from "@portabletext/vue";

const _sanitizeHref = (href: string) => {
  if (href.startsWith("http")) {
    return href;
  }
  return `//${href}`;
};
export const portableTextComponents: PortableTextComponents = {
  block: {
    "text-lg": (_, { slots }) =>
      h("p", { class: "md:text-lg" }, slots.default?.()),
  },
  marks: {
    align_center: (_, { slots }) =>
      h("div", { class: "text-center" }, slots.default?.()),

    linkExternal: ({ value }, { slots }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      // console.log('value.href', value.href)
      return h(
        "a",
        { href: _sanitizeHref(value.href), rel, target: "_blank" },
        slots.default?.(),
      );
    },
  },
};
