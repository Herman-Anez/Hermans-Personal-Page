import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";
import { dictionaries } from "@/resources/dictionaries";

export default async function sitemap() {
  const locales = Object.keys(dictionaries);
  let allRoutes: any[] = [];

  locales.forEach((locale) => {
    const blogs = getPosts(["src", "app", "[locale]", "blog", "posts"], locale).map((post) => ({
      url: `${baseURL}/${locale}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));

    const works = getPosts(["src", "app", "[locale]", "work", "projects"], locale).map((post) => ({
      url: `${baseURL}/${locale}/work/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));

    const activeRoutes = Object.keys(routesConfig).filter(
      (route) => routesConfig[route as keyof typeof routesConfig],
    );

    const routes = activeRoutes.map((route) => ({
      url: `${baseURL}/${locale}${route !== "/" ? route : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
    }));

    allRoutes = [...allRoutes, ...routes, ...blogs, ...works];
  });

  return allRoutes;
}
