import { Hono } from "hono";
import { getComments, createComment, getCommentsByPost } from "../services/commentService.js";

const commentRoutes = new Hono();

commentRoutes.get("/", (c) => {
  return c.json(getComments());
});

commentRoutes.post("/", async (c) => {
  const { content, postId } = await c.req.json();
  return c.json(createComment(content, postId));
});

commentRoutes.get("/post/:postId", (c) => {
  return c.json(getCommentsByPost(c.req.param("postId")));
});

export default commentRoutes;
