// Handlers for our route /posts
// Handle logic here instead under routes

import PostMsg from '../models/postMsg.js';

export const getPosts = async (req,res) => {
  try {
    const postMsgs = await PostMsg.find();
    console.log(postMsgs);
    res.status(200).json(postMsgs);
  } catch (error){
    res.status(404).json({message: error.message});
  }
};

export const createPosts = async(req,res) => {
  const postBody = req.body;
  const newPost = new PostMsg(postBody);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error){
    res.status(409).json({message: error.message});
  }
};