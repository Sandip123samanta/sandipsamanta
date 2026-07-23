"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import "easymde/dist/easymde.min.css";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
