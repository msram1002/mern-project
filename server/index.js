import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

// Initialize the app
const app = express();

//
app.use('/posts', postRoutes);

// Don't use body-parser
// If you are using Express 4.16+
app.use(express.json({
  limit: "30MB",
  extended: true
}));

app.use(express.json({
  limit: "30MB",
  extended: true
}));

app.use(cors());

// Setting up mongoDB Atlas - hosting on cloud
// Real Applications we need to store this as a secret
const CONNECTION_URL = 'mongodb+srv://mern-memories-app:Altoids!35@cluster0.nkjxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err))
;

// Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, 
//  and useCreateIndex are true, and useFindAndModify is false.
// mongoose.set('useFindAndModify', false);