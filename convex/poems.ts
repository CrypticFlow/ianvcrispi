import { query } from "./_generated/server";

export const getPoems = query({
  args: {},
  handler: async (ctx) => {
    const poems = await ctx.db.query("poems").collect();
    return poems.sort((a, b) => a.order - b.order);
  },
});