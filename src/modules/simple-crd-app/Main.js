import React, { useState, useEffect } from "react";

import Login from "./Login";
import CreatePost from "./CreatePost";
import Header from "./Header";
import PostList from "./PostList";

export const UserContext = React.createContext();
export const PostContext = React.createContext({ posts: [] });

const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      const newPost = action.payload.post;

      return {
        posts: [newPost, ...state.posts]
      };
    case "DELETE_POST":
      return {
        posts: state.posts.filter((post) => post.id !== action.payload)
      };
    default:
      return state;
  }
};

const Main = () => {
  const [user, setUser] = useState("hoge");
  // const [posts, setPosts] = useState([]);
  const initialPostState = React.useContext(PostContext);

  const [state, dispatch] = React.useReducer(postReducer, initialPostState);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please Login";
  }, [user]);

  // const handleAddPost = (newPost) => {
  //   setPosts([newPost, ...posts])
  // }

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
};

export default Main;

const initialState = { user: "" };

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload.username
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: ""
      };
    default:
      return state;
  }
}

const loginAction = { type: "LOGIN_USER", payload: { username: "Hoge" } };
const logoutAction = { type: "LOGOUT_USER" };

console.log(userReducer(initialState, loginAction));
console.log(userReducer(initialState, logoutAction));