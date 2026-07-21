import fs from "node:fs";
import path from "node:path";
import { client } from "@/sanity/client";
import {
  allPostsQuery,
  allProjectsQuery,
  singlePostQuery,
  singleProjectQuery,
} from "@/sanity/queries";
import matter from "gray-matter";
import { notFound } from "next/navigation";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

export type PostItem = {
  metadata: Metadata;
  slug: string;
  content: string;
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || "",
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["src", "app", "blog", "posts"]): PostItem[] {
  const postsDir = path.join(/*turbopackIgnore: true*/ process.cwd(), ...customPath);
  return getMDXData(postsDir);
}

export async function getSanityPosts(): Promise<PostItem[]> {
  try {
    const rawPosts = await client.fetch(allPostsQuery);
    if (rawPosts && rawPosts.length > 0) {
      return rawPosts.map((post: any) => ({
        slug: post.slug,
        content: post.content,
        metadata: {
          title: post.title,
          publishedAt: post.publishedAt,
          summary: post.summary,
          image: post.image || "",
          images: [],
          tag: post.tag || "",
          team: [],
          link: "",
        },
      }));
    }
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
  }
  return [];
}

export async function getSanityProjects(): Promise<PostItem[]> {
  try {
    const rawProjects = await client.fetch(allProjectsQuery);
    if (rawProjects && rawProjects.length > 0) {
      return rawProjects.map((project: any) => ({
        slug: project.slug,
        content: project.content,
        metadata: {
          title: project.title,
          publishedAt: project.publishedAt,
          summary: project.summary,
          image: project.image || "",
          images: project.images || [],
          tag: "",
          team: project.team || [],
          link: project.link || "",
        },
      }));
    }
  } catch (error) {
    console.error("Error fetching projects from Sanity:", error);
  }
  return [];
}

export async function getSanityPost(slug: string): Promise<PostItem | undefined> {
  try {
    const post = await client.fetch(singlePostQuery, { slug });
    if (post) {
      return {
        slug: post.slug,
        content: post.content,
        metadata: {
          title: post.title,
          publishedAt: post.publishedAt,
          summary: post.summary,
          image: post.image || "",
          images: [],
          tag: post.tag || "",
          team: [],
          link: "",
        },
      };
    }
  } catch (error) {
    console.error(`Error fetching post ${slug} from Sanity:`, error);
  }
  return undefined;
}

export async function getSanityProject(slug: string): Promise<PostItem | undefined> {
  try {
    const project = await client.fetch(singleProjectQuery, { slug });
    if (project) {
      return {
        slug: project.slug,
        content: project.content,
        metadata: {
          title: project.title,
          publishedAt: project.publishedAt,
          summary: project.summary,
          image: project.image || "",
          images: project.images || [],
          tag: "",
          team: project.team || [],
          link: project.link || "",
        },
      };
    }
  } catch (error) {
    console.error(`Error fetching project ${slug} from Sanity:`, error);
  }
  return undefined;
}
