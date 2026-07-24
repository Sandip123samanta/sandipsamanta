"use client";

import { Button, Column, Grid, Icon, IconButton, Input, Row, Text } from "@once-ui-system/core";
import { useMemo, useState } from "react";
import Post from "./Post";

interface BlogSearchAndPaginationProps {
  posts: any[];
}

const POSTS_PER_PAGE = 5;

export function BlogSearchAndPagination({ posts }: BlogSearchAndPaginationProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts exclusively by title or tag using activeSearch (or fallback to real-time query)
  const queryToUse = activeSearch || searchQuery;
  const filteredPosts = useMemo(() => {
    const query = queryToUse.trim().toLowerCase();
    if (!query) return posts;

    return posts.filter((post) => {
      const titleMatch = post.metadata?.title?.toLowerCase().includes(query);
      const tagMatch = post.metadata?.tag?.toLowerCase().includes(query);
      return titleMatch || tagMatch;
    });
  }, [posts, queryToUse]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);

  const startIndex = (activePage - 1) * POSTS_PER_PAGE;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    setActiveSearch(val);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setActiveSearch(searchQuery);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setActiveSearch("");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 120, behavior: "smooth" });
      }
    }
  };

  return (
    <Column fillWidth gap="32">
      {/* Search Bar Container */}
      <Column fillWidth background="surface" border="neutral-alpha-medium" radius="l" padding="16">
        <Row as="form" onSubmit={handleSearchSubmit} fillWidth gap="12" vertical="center">
          <Row fillWidth flex={1}>
            <Input
              id="blog-search"
              height="s"
              placeholder="Search by article title or tag (e.g., JavaScript, React)..."
              value={searchQuery}
              onChange={handleInputChange}
              hasPrefix={<Icon name="search" size="s" onBackground="neutral-medium" />}
              hasSuffix={
                searchQuery ? (
                  <IconButton
                    icon="close"
                    size="s"
                    variant="ghost"
                    tooltip="Clear search"
                    onClick={handleClearSearch}
                  />
                ) : null
              }
            />
          </Row>
          <Button type="submit" variant="primary" size="l" prefixIcon="search">
            Search
          </Button>
        </Row>
      </Column>

      {/* Filter / Results Summary */}
      <Row fillWidth horizontal="between" vertical="center" paddingX="8">
        <Text variant="body-default-s" onBackground="neutral-weak">
          {queryToUse ? (
            <>
              Found <Text onBackground="neutral-strong">{filteredPosts.length}</Text> result
              {filteredPosts.length === 1 ? "" : "s"} for "{queryToUse}"
            </>
          ) : (
            <>
              Showing{" "}
              <Text onBackground="neutral-strong">
                {filteredPosts.length === 0 ? 0 : startIndex + 1}
              </Text>
              –
              <Text onBackground="neutral-strong">
                {Math.min(startIndex + POSTS_PER_PAGE, filteredPosts.length)}
              </Text>{" "}
              of <Text onBackground="neutral-strong">{filteredPosts.length}</Text> articles
            </>
          )}
        </Text>
      </Row>

      {/* Blog Posts Grid Display */}
      {displayedPosts.length > 0 ? (
        <Column fillWidth gap="24">
          {/* First / Featured Post of Current Page */}
          <Post post={displayedPosts[0]} thumbnail={true} direction="row" />

          {/* Remaining 4 Posts in 2-Column Grid */}
          {displayedPosts.length > 1 && (
            <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16">
              {displayedPosts.slice(1).map((post) => (
                <Post key={post.slug} post={post} thumbnail={true} direction="column" />
              ))}
            </Grid>
          )}
        </Column>
      ) : (
        /* Empty State */
        <Column
          fillWidth
          gap="16"
          horizontal="center"
          vertical="center"
          style={{ opacity: 0.8, padding: "64px 0" }}
        >
          <Text variant="heading-strong-m">No matching blog posts</Text>
          <Text variant="body-default-m" onBackground="neutral-medium">
            No articles found matching "{queryToUse}" in title or tag.
          </Text>
          <Row marginTop="8">
            <Button variant="secondary" onClick={handleClearSearch}>
              Clear Search
            </Button>
          </Row>
        </Column>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Row fillWidth horizontal="center" vertical="center" gap="8" marginTop="24">
          <Button
            variant="tertiary"
            size="s"
            disabled={activePage === 1}
            onClick={() => handlePageChange(activePage - 1)}
          >
            Previous
          </Button>

          <Row gap="4" vertical="center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === activePage ? "primary" : "tertiary"}
                size="s"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
          </Row>

          <Button
            variant="tertiary"
            size="s"
            disabled={activePage === totalPages}
            onClick={() => handlePageChange(activePage + 1)}
          >
            Next
          </Button>
        </Row>
      )}
    </Column>
  );
}
