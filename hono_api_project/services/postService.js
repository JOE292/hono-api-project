import db from "../db/db.js";

export const getPosts = () => {
  return db.prepare("SELECT * FROM posts").all();
};

export const createPost = (title, userId) => {
  return db.prepare(
    "INSERT INTO posts (title, userId) VALUES (?, ?)"
  ).run(title, userId);
};

export const getPostsByUser = (userId) => {
  return db.prepare(
    "SELECT * FROM posts WHERE userId = ?"
  ).all(userId);
};
