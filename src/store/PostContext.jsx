import { createContext, useReducer } from "react";


export const PostContext = createContext([
  {
    cardList: [],
    addPost: () => { },
    deletePost: () => { }
  }
]);

// ----- reducer function -----

function listReducerFn(currentList, action) {

  let newListReference = currentList;
  if (action.type === 'ADD_POST') {
    newListReference = [action.payload, ...currentList];
  }
  else if (action.type === 'DELETE_POST') {
    newListReference = currentList.filter((post) => post.userId != action.payload.userId);
  }
  return newListReference;

}

const PostContextTool = ({ children }) => {

  const [cardList, dispatchCardList] = useReducer(listReducerFn, DEFAULT_POST_LIST);


  // ----- addPost function -----
  function addPost(userId, title, body) {
    let toBeDispatched = {
      type: 'ADD_POST',
      payload: { userId, title, body }
    };
    dispatchCardList(toBeDispatched);
  }

  // ----- deletePost function -----
  function deletePost(userId) {
    let toBeDispatched = {
      type: 'DELETE_POST',
      payload: { userId }
    };
    dispatchCardList(toBeDispatched);
  }


  return (
    <PostContext.Provider value={{ cardList, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );

}

const DEFAULT_POST_LIST = [
  {
    id: "10",
    userId: "user-9",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
  },
  {
    id: "20",
    userId: "user-12",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
  },
  {
    id: "20",
    userId: "user-12",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
  },
  {
    id: "20",
    userId: "user-12",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
  },
  {
    id: "20",
    userId: "user-12",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
  },
  {
    id: "20",
    userId: "user-12",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
  },
];

export default PostContextTool