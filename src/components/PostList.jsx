import { useContext } from 'react'
import Post from './Post'
import { PostContext } from '../store/PostContext'

const PostList = () => {

  const { cardList } = useContext(PostContext);

  return (
    <div className="row post-main-container postlist-container" style={{ display: 'flex' }}>
      {cardList.map((item, index) => <Post key={index} item={item} index={index} />)}
    </div>

  )
}

export default PostList