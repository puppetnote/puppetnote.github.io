export const PAGES = [
  "home", "about", "history", "awards", "broadcast", "press",
  "performance", "puppetcity", "ddkt", "camp",
  "program", "career", "career1", "career2", "academygallery",
  "gallerycustom", "galleryold",
  "uk", "nz", "taiwan", "moscow", "lebanon", "bulgaria",
  "xinshanghai", "poland", "shanghai", "hongkong", "turkey",
  "czech", "bangladesh", "harbin",
  "books", "news", "map", "contact",
] as const;

export type Page = (typeof PAGES)[number];

export type NavSection =
  | "intro" | "perform" | "academy" | "gallery"
  | "books" | "contact" | "news" | "map" | null;
