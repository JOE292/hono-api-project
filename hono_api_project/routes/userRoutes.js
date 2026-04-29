import { Hono } from "hono";
import { getUsers, createUser } from "../services/userService.js";

const userRoutes = new Hono();

userRoutes.get("/", (c) => {
  return c.json(getUsers());
});

userRoutes.post("/", async (c) => {
  const { name } = await c.req.json();
  return c.json(createUser(name));
});

export default userRoutes;
