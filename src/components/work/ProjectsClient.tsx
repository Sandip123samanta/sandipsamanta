"use client";

import { ProjectCard } from "@/components";
import { Button, Column, Row, Text } from "@once-ui-system/core";
import { useState } from "react";

interface ProjectsClientProps {
  projects: any[];
  itemsPerPage: number;
}

export function ProjectsClient({ projects, itemsPerPage }: ProjectsClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (projects.length === 0) {
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

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      <Column fillWidth gap="xl" paddingX="l">
        {currentProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member: any) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            github={post.metadata.github || ""}
          />
        ))}
      </Column>

      {totalPages > 1 && (
        <Row fillWidth horizontal="center" vertical="center" gap="16" marginTop="24">
          <Button
            variant="secondary"
            size="m"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            variant="secondary"
            size="m"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </Row>
      )}
    </Column>
  );
}
