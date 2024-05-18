import { mapData } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `*[_type == "blog"] | order(_createdAt desc) {

      "currentSlug" : slug.current,
      _updatedAt
      
  }`;

  const data: mapData[] = await client.fetch(query);

  const blogPosts: MetadataRoute.Sitemap = data.map(
    ({ currentSlug, _updatedAt }) => ({
      url: `https://optictvv3.vercel.app/en/blogs/${currentSlug}`,
      lastModified: _updatedAt,
      alternates: {
        languages: {
          fr: `https://optictvv3.vercel.app/fr/blogs/${currentSlug}`,
          pt: `https://optictvv3.vercel.app/pt/blogs/${currentSlug}`,
        },
      },
    })
  );
  return [
    {
      url: "https://optictvv3.vercel.app/en",
      changeFrequency: "weekly",
      alternates: {
        languages: {
          fr: "https://optictvv3.vercel.app/fr",
          pt: "https://optictvv3.vercel.app/pt",
        },
      },
    },
    {
      url: "https://optictvv3.vercel.app/en/about",
      changeFrequency: "weekly",
      alternates: {
        languages: {
          fr: "https://optictvv3.vercel.app/fr/about",
          pt: "https://optictvv3.vercel.app/pt/about",
        },
      },
    },
    {
      url: "https://optictvv3.vercel.app/en/blogs",
      changeFrequency: "weekly",
      alternates: {
        languages: {
          fr: "https://optictvv3.vercel.app/fr/blogs",
          pt: "https://optictvv3.vercel.app/pt/blogs",
        },
      },
    },
    {
      url: "https://optictvv3.vercel.app/en/channel-list",
      changeFrequency: "weekly",
      alternates: {
        languages: {
          fr: "https://optictvv3.vercel.app/fr/channel-list",
          pt: "https://optictvv3.vercel.app/pt/channel-list",
        },
      },
    },
    ...blogPosts,
  ];
}
