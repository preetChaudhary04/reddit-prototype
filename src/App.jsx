import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostList from './components/PostList'
import { useState } from 'react'
import CreatePost from './components/CreatePost'
import PostContextTool from './store/PostContext'

const App = () => {

  const [selectedTab, setSelectedTab] = useState("Home");


  return (
    <PostContextTool>
      <div className='main'>
        <Header />
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === 'Home' && <PostList />}
        {selectedTab === 'Create Post' && <CreatePost />}
      </div>
    </PostContextTool>
  )
}

export default App