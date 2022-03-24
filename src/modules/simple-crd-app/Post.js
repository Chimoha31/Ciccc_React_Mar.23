import React, { useContext } from "react";

import { UserContext, PostContext } from "./Main";

const Post = ({ image, content, user, id }) => {
  const currentUser = useContext(UserContext);
  const { dispatch } = useContext(PostContext);
  const isCurrentUser = currentUser === user;

  const handleDeletePost = (postId) => {
    dispatch({ type: "DELETE_POST", payload: postId });
  };

  return (
    <>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="upload"
          style={{ height: 100 }}
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && "green" }}>{user}</div>
      <p>
        {isCurrentUser && (
          <button onClick={() => handleDeletePost(id)}>Delete</button>
        )}
      </p>
    </>
  );
};

export default Post;