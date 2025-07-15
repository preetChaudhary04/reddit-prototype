import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostList from './components/PostList'
import { useState } from 'react'
import CreatePost from './components/CreatePost'
import PostContextTool from './store/PostContext'
import SignUpPage from './components/SignUpPage'


const App = () => {

  const [selectedTab, setSelectedTab] = useState("Home");
  const [signUpToggle, setSignUpToggle] = useState();
  const [sidebarOpener, setSidebarOpener] = useState(true);


  return (
    <PostContextTool>
      <div className='main'>

        <Header setSignUpToggle={setSignUpToggle} setSidebarOpener={setSidebarOpener}/>
        <div className="main-body">

          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} sidebarOpener={sidebarOpener}/>
          {signUpToggle === true && <SignUpPage setSignUpToggle={setSignUpToggle} />}
          {selectedTab === 'Home' && <PostList />}
          {selectedTab === 'Create Post' && <CreatePost />}

        </div>

      </div>
    </PostContextTool>
  )
}

export default App