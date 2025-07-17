import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import postsRouter from './routes/posts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3001;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', postsRouter);

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
