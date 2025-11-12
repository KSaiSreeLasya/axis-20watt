import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g. "/projects"
  canonicalUrl?: string; // absolute URL overrides canonicalPath
}

export default function SEO({
  title,
  description,
  canonicalPath,
  canonicalUrl,
}: SEOProps) {
  useEffect(() => {
    const SITE_TITLE = "Azorix Embedded";
    document.title = SITE_TITLE;

    const ensureMeta = (key: "name" | "property", id: string) => {
      let el = document.head.querySelector(
        `meta[${key}="${id}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(key, id);
        document.head.appendChild(el);
      }
      return el;
    };

    if (description !== undefined) {
      const desc = ensureMeta("name", "description");
      desc.setAttribute("content", description);
    }

    const ensureLink = (rel: string) => {
      let el = document.head.querySelector(
        `link[rel="${rel}"]`,
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      return el;
    };

    const canonical =
      canonicalUrl ??
      (typeof window !== "undefined"
        ? `${window.location.origin}${canonicalPath ?? window.location.pathname}`
        : (canonicalPath ?? "/"));

    const link = ensureLink("canonical");
    link.setAttribute("href", canonical);

    const ogTitle = ensureMeta("property", "og:title");
    ogTitle.setAttribute("content", "Azorix Embedded");

    if (description) {
      const ogDesc = ensureMeta("property", "og:description");
      ogDesc.setAttribute("content", description);
    }

    const ogUrl = ensureMeta("property", "og:url");
    ogUrl.setAttribute("content", canonical);
  }, [title, description, canonicalPath, canonicalUrl]);

  return null;
}
