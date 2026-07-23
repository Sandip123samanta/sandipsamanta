export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  "image": select(
    defined(image.asset) => image.asset->url,
    image
  ),
  "images": images[] {
    "url": select(
      defined(asset) => asset->url,
      @
    )
  },
  tag,
  content
}`;

export const singlePostQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  "image": select(
    defined(image.asset) => image.asset->url,
    image
  ),
  "images": images[] {
    "url": select(
      defined(asset) => asset->url,
      @
    )
  },
  tag,
  content
}`;

export const allProjectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  "images": images[] {
    "url": select(
      defined(asset) => asset->url,
      @
    )
  },
  link,
  github,
  team,
  content
}`;

export const singleProjectQuery = `*[_type == "project" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  publishedAt,
  summary,
  "images": images[] {
    "url": select(
      defined(asset) => asset->url,
      @
    )
  },
  link,
  github,
  team,
  content
}`;
