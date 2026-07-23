import { ProjectCard } from "@/components";
import { getSanityProjects } from "@/utils/utils";
import { Column, Text } from "@once-ui-system/core";
import { ProjectsClient } from "./ProjectsClient";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  featured?: boolean;
  paginate?: boolean;
}

export async function Projects({ range, exclude, featured, paginate }: ProjectsProps) {
  let allProjects = await getSanityProjects();

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  let projectsToDisplay = [...allProjects];

  if (featured) {
    const featuredProjects = allProjects.filter((project) => project.metadata.featured === true);

    if (featuredProjects.length > 0) {
      featuredProjects.sort((a, b) => {
        const orderA = a.metadata.featuredOrder;
        const orderB = b.metadata.featuredOrder;

        if (orderA !== undefined && orderB !== undefined) {
          if (orderA !== orderB) return orderA - orderB;
        } else if (orderA !== undefined) {
          return -1;
        } else if (orderB !== undefined) {
          return 1;
        }

        return (
          new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
        );
      });
      projectsToDisplay = featuredProjects.slice(0, 3);
    } else {
      projectsToDisplay.sort((a, b) => {
        return (
          new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
        );
      });
      projectsToDisplay = projectsToDisplay.slice(0, 3);
    }
  } else {
    projectsToDisplay.sort((a, b) => {
      return (
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
      );
    });
  }

  const displayedProjects = range
    ? projectsToDisplay.slice(range[0] - 1, range[1] ?? projectsToDisplay.length)
    : projectsToDisplay;

  if (displayedProjects.length === 0) {
    return (
      <Column
        fillWidth
        gap="16"
        paddingX="l"
        horizontal="center"
        vertical="center"
        style={{ opacity: 0.5, padding: "80px 0" }}
      >
        <Text variant="body-default-m">No projects available at the moment.</Text>
      </Column>
    );
  }

  if (paginate) {
    return <ProjectsClient projects={displayedProjects} itemsPerPage={4} />;
  }

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          github={post.metadata.github || ""}
        />
      ))}
    </Column>
  );
}
