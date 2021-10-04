import React from 'react';
import MemoriesPost from './MemoriesPost/MemoriesPost';
import useStyles from './memoriesStyles';

const MemoriesPosts = () => {
  const classes = useStyles();
  
  return (
    <>
      <h1>POSTS</h1>
      <MemoriesPost />
      <MemoriesPost />
    </>
  )
}

export default MemoriesPosts;
