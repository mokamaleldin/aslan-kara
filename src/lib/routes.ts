import type { Language } from "../types";

export function getPagePath() {
  return (
    window.location.pathname
      .replace(/^\/(ar|en)(?=\/|$)/, "")
      .replace(/\/$/, "") || "/"
  );
}

export function routeHref(language: Language, path = "/") {
  return `/${language}${path === "/" ? "" : path}`;
}

export function projectHref(language: Language, id: string, search = "") {
  const params = new URLSearchParams(search);
  params.delete("lang");
  const query = params.toString();
  return `${routeHref(language, `/work/${id}`)}${query ? `?${query}` : ""}`;
}
