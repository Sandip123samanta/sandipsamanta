import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { markdownSchema } from "sanity-plugin-markdown";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  basePath: "/studio",
  name: "portfolio",
  title: "Portfolio CMS",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool(), markdownSchema()],
});
