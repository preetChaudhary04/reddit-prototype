import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { RiShareForwardLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostContext } from "../store/PostContext";



const Post = ({ item, index }) => {

  const { deletePost } = useContext(PostContext);

  return (
    <div className="col-sm-6 mb-3 mb-sm-0 card-wrapper" >
      <div className="card-className position-relative card-component">

        <span onClick={() => deletePost(item.userId)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <AiFillDelete />
        </span>

        <p>
          <span className="user-id"><FaUserCircle /> {item.userId}</span>
          <span> • </span>
          <span className="post-time">1 day ago</span>
        </p>

        <h5 className="card-title">{item.title}</h5>

        <p className="card-text">{item.body}</p>

        <p className='button-holder'>
          <button className="btn interact-btn"><AiOutlineLike /></button>
          <button className="btn interact-btn"><AiOutlineDislike /></button>
          <button className="btn interact-btn"><LiaCommentDotsSolid /></button>
          <button className="btn interact-btn"><RiShareForwardLine /></button>
        </p>

      </div>
    </div>

  )
}

export default Post