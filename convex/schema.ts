import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  poems: defineTable({
    title: v.string(),
    imageUrl: v.string(),
    alt: v.string(),
    width: v.number(),
    height: v.number(),
    animationDirection: v.string(), // "left" or "right"
    initialX: v.number(),
    justifyPosition: v.string(), // "start" or "end"
    paddingLeft: v.optional(v.string()),
    paddingRight: v.optional(v.string()),
    paddingBottom: v.string(),
    order: v.number(),
  }),
});