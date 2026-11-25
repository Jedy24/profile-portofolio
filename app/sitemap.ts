import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://portofolio-profile.vercel.app", lastModified: new Date() },
  ];
}
