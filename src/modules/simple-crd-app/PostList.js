import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return posts.map((post, idx) => (
    <Post key={idx} {...post} />
  ));
};

export default PostList;