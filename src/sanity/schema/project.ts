import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      description: "Upload gallery images for this project.",
    }),
    defineField({
      name: "link",
      title: "External Link",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "GitHub Link",
      type: "url",
    }),
    defineField({
      name: "team",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          name: "member",
          title: "Member",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "role", title: "Role", type: "string" },
            { name: "avatar", title: "Avatar URL", type: "string" },
            { name: "linkedIn", title: "LinkedIn URL", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "content",
      title: "Content (Markdown/MDX)",
      type: "text",
      description: "Optional case study content for this project.",
    }),
  ],
});
