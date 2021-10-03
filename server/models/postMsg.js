// Utilize MongoDB
import mongoose from 'mongoose';

// Need to create a schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

// Turn schema to model
const PostMsg = mongoose.model('PostMsg', postSchema);

export default PostMsg;