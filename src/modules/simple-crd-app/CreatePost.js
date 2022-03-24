import React from "react";
import { PostContext } from "./Main";

const CreatePost = ({ user }) => {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  const { dispatch } = React.useContext(PostContext)

  function handleSubmit(e) {
    e.preventDefault();
    if(!content && !image){
        return alert('Fields must not be empty')
    }
    const post = { content, image, user, id: new Date() };
    // handleAddPost(post);
    dispatch({ type: "ADD_POST", payload: { post } })
    setContent("");
    setImage(null)
    imageInputRef.current.value = ""
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" ref={imageInputRef} onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;