import express from "express";
import cors from "cors";
import { z } from "zod";
import { projects } from "./projects";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/projects", (_req, res) => {
  res.json(projects);
});

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

app.post("/api/contact", (req, res) => {
  const parse = contactSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      ok: false,
      errors: parse.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
    });
  }

  const { name, email, message } = parse.data;
  // In a real app, send email or persist to DB here.
  console.log("Contact submission", { name, email, message });
  res.json({ ok: true });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on http://localhost:${PORT}`);
});
