import { Hono } from "hono";
import { getPosts, createPost, getPostsByUser } from "../services/postService.js";

const postRoutes = new Hono();

postRoutes.get("/", (c) => {
  return c.json(getPosts());
});

postRoutes.post("/", async (c) => {
  const { title, userId } = await c.req.json();
  return c.json(createPost(title, userId));
});

postRoutes.get("/user/:userId", (c) => {
  return c.json(getPostsByUser(c.req.param("userId")));
});

export default postRoutes;
