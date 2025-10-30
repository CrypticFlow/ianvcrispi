import { query } from "./_generated/server";

export const getPoems = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("poems").order("asc", "order").collect();
  },
});