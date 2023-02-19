import { mutation } from "./_generated/server";

export default mutation(({ db }, body) => {
  const user = { body };
  return db.insert("sessions", user);
});