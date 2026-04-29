import db from "../db/db.js";

export const getUsers = () => {
  return db.prepare("SELECT * FROM users").all();
};

export const createUser = (name) => {
  return db.prepare("INSERT INTO users (name) VALUES (?)").run(name);
};
