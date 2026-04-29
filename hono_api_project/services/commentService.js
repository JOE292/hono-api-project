import db from "../db/db.js";

export const getComments = () => {
  return db.prepare("SELECT * FROM comments").all();
};

export const createComment = (content, postId) => {
  return db.prepare(
    "INSERT INTO comments (content, postId) VALUES (?, ?)"
  ).run(content, postId);
};

export const getCommentsByPost = (postId) => {
  return db.prepare(
    "SELECT * FROM comments WHERE postId = ?"
  ).all(postId);
};
