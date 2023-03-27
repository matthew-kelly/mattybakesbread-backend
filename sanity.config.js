// sanity.config.js
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "mattybakesbread",
  projectId: "oph69bo9",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});
