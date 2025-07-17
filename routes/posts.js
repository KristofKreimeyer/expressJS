import express from "express";

const router = express.Router();

let posts = [
  { id: 1, title: "Post One", body: "This is post one" },
  { id: 2, title: "Post Two", body: "This is post two" },
  { id: 3, title: "Post Three", body: "This is post three" }
];

// get all posts
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || posts.length;
  if(!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// get a single post
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

// create a new post
router.post('/', (req, res) => {
        console.log("Request body:", req.body); // Debug-Ausgabe

    const { title, body } = req.body;

    if (!title) {
        return res.status(400).send('Title is required');
    }

    const newPost = {
        id: posts.length + 1,
        title,
        body
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

export default router;