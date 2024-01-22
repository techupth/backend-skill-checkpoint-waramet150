import express from "express";
import { client } from "./utils/db.js";

async function init() {
  await client.connect;
  const app = express();
  const port = 4000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    return res.json("Hello Skill Checkpoint #2");
  });

  app.post("/create-question", (req, res) => {
    return res.json({ message: `question has been posted successfully` });
  });

  app.get("/questions", (req, res) => {
    return res.json({ data: `questions` });
  });

  app.get("/questions/:questionId", (req, res) => {
    return res.json({ data: `questions` });
  });

  app.put("/questions/:questionId", (req, res) => {
    return res.json({ data: `questions` });
  });

  app.delete("/questions/:questionId", (req, res) => {
    return res.json({ message: `question has been deleted successfully` });
  });

  app.get("*", (req, res) => {
    return res.status(404).json("Not found");
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

init();
