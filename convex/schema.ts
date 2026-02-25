import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    boards: defineTable({ name: v.string(), layout: v.any(), createdAt: v.string() }),
    widgets: defineTable({ boardId: v.id("boards"), type: v.string(), title: v.string(), config: v.any(), order: v.number() }).index("by_board", ["boardId"]),
    dataSources: defineTable({ name: v.string(), type: v.string(), config: v.any(), status: v.string() })
});
