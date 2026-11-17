import { useTranslation } from "react-i18next";
import profiles from "./data/profiles.json";

/* Role pages: /ba, /erp, /consulting share the whole site and differ only
   in the data listed in src/data/profiles.json (plus their own sentences
   under "profiles.<name>" in the translation files). Adding a page is a
   data entry there — no component changes. */

const DEFAULT_CONFIG = {
  defaultLanguage: "en",
  experienceOrder: null,
  hideGallery: false,
  hiddenAchievementSets: [],
  hiddenSocials: [],
};

/**
 * Works out which page is being viewed from the URL path: strips the base
 * path (PUBLIC_URL, e.g. "/dieuanhcv" on GitHub Pages or "" on a custom
 * domain) and takes the first remaining segment. Anything that is not a
 * known role page is "default".
 */
export const resolveProfile = (pathname, publicUrl) => {
  let base = publicUrl || "";
  // PUBLIC_URL may be a full URL; only its path matters
  const scheme = base.match(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i);
  if (scheme) base = base.slice(scheme[0].length);
  base = base.replace(/\/+$/, "");

  let path = pathname || "/";
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length);
  }

  const segment = path.split("/").filter(Boolean)[0] || "";
  return Object.prototype.hasOwnProperty.call(profiles, segment)
    ? segment
    : "default";
};

export const profile = resolveProfile(
  typeof window !== "undefined" ? window.location.pathname : "/",
  process.env.PUBLIC_URL,
);

export const profileConfig = { ...DEFAULT_CONFIG, ...(profiles[profile] || {}) };

export const showGallery = !profileConfig.hideGallery;

export const isSocialVisible = (name) =>
  !profileConfig.hiddenSocials.includes(name);

export const isAchievementSetVisible = (id) =>
  !profileConfig.hiddenAchievementSets.includes(id);

/** Orders experience entries by the page's id list; unlisted ones keep
    their original order at the end. */
export const orderExperience = (items) => {
  const order = profileConfig.experienceOrder;
  if (!order || !Array.isArray(items)) return items;
  const rank = (item) => {
    const i = order.indexOf(item.id);
    return i === -1 ? order.length : i;
  };
  return items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => rank(a.item) - rank(b.item) || a.index - b.index)
    .map(({ item }) => item);
};

/**
 * Like t(), but prefers this page's own sentence when one exists under
 * "profiles.<page>.<key>" and falls back to the shared one otherwise.
 */
export const useProfileText = () => {
  const { t, i18n } = useTranslation();
  return (key, options) => {
    const own = `profiles.${profile}.${key}`;
    return i18n.exists(own) ? t(own, options) : t(key, options);
  };
};
