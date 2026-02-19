import type { Home, Project } from "~~/types/schema";

export function _formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
}

export function _linkResolver(doc: Project | Home) {
  if (!doc.slug) return "/";
  switch (doc._type) {
    case "project":
      return `/p/${doc.slug.current}`;

    default:
      return "/";
  }
}
