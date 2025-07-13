import { useContext, useRef } from "react"
import { PostContext } from "../store/PostContext";

const CreatePost = () => {

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();

  const { addPost } = useContext(PostContext);

  function handleAddPost(event) {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    addPost(userId, title, body);

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
  }

  return (
    <div className="form-wrapper">
      <form className="main-createpost" onSubmit={handleAddPost}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input ref={userIdElement} type="text" className="form-control" id="username" placeholder="Enter your username" />
          <div id="emailHelp" className="form-text" style={{ color: '#bebfbf' }}>You will only need to enter username until the backend is provided.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title of the Post</label>
          <input ref={titleElement} type="text" className="form-control" id="title" placeholder="Enter title here" />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">Description of the Post</label>
          <input ref={bodyElement} type="text" className="form-control" id="body" placeholder="Enter description here" />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreatePost