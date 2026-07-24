import { Mailchimp } from "@/components";
import { BlogSearchAndPagination } from "@/components/blog/BlogSearchAndPagination";
import { baseURL, blog, person } from "@/resources";
import { getSanityPosts } from "@/utils/utils";
import { Column, Heading, Meta, RevealFx, Schema } from "@once-ui-system/core";

export const revalidate = 60;

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default async function Blog() {
  const allBlogs = await getSanityPosts();
  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <Column maxWidth="m" paddingTop="24" gap="32">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY="4" fillWidth>
        <Heading marginBottom="m" variant="heading-strong-xl" marginLeft="24">
          {blog.title}
        </Heading>
      </RevealFx>
      <RevealFx translateY="8" delay={0.2} fillWidth>
        <Column fillWidth flex={1} gap="40">
          <BlogSearchAndPagination posts={sortedBlogs} />
          <Mailchimp marginBottom="l" />
        </Column>
      </RevealFx>
    </Column>
  );
}
