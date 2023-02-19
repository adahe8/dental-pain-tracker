import { query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

export default query(async ({ db }, userId) => {
    const actualId = new Id("users", userId);

  return await db
    .query("users")
    .filter((q) => q.eq(q.field("user"), actualId))
    .collect();
});
