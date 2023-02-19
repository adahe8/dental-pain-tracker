import { mutation } from "./_generated/server";

export default mutation(({ db }, body) => {
  const session = { body };
  return db.insert("sessions", session);
});