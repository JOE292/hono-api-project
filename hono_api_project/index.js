import { Hono } from "hono";
import { serve } from "@hono/node-server";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

const app = new Hono();

app.route("/users", userRoutes);
app.route("/posts", postRoutes);
app.route("/comments", commentRoutes);

serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Server running on http://localhost:3000");