import { baseURL, routes as routesConfig } from "@/resources";
import { getPosts, getSanityPosts, getSanityProjects } from "@/utils/utils";

export default async function sitemap() {
  let rawBlogs = await getSanityPosts();
  if (!rawBlogs.length) {
    rawBlogs = getPosts(["src", "app", "blog", "posts"]);
  }

  let rawWorks = await getSanityProjects();
  if (!rawWorks.length) {
    rawWorks = getPosts(["src", "app", "work", "projects"]);
  }

  const blogs = rawBlogs.map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt || new Date().toISOString().split("T")[0],
  }));

  const works = rawWorks.map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt || new Date().toISOString().split("T")[0],
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}
