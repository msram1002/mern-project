// Handlers for our route /posts
// Handle logic here instead under routes

export const getPosts = (req,res) => {
  res.send("THIS WORKS NOW!");
};

export const createPosts = (req,res) => {
  res.send("POST CREATION");
};