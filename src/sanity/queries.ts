export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  image,
  tag,
  content
}`;

export const singlePostQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  image,
  tag,
  content
}`;

export const allProjectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  image,
  images,
  link,
  team,
  content
}`;

export const singleProjectQuery = `*[_type == "project" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  image,
  images,
  link,
  team,
  content
}`;
