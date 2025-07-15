import { FaHouse } from "react-icons/fa6";
import { BiSolidPlusSquare } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab, sidebarOpener }) => {
  return (
    <>
      <div className={`d-flex flex-column flex-shrink-0 p-3 main-sidebar ${sidebarOpener === false && 'displayNone'}`}>

        <ul className="nav nav-pills flex-column mb-auto sidebar-options">
          <li className="nav-item">
            <a href="#" className={`nav-link text-white ${selectedTab === 'Home' && 'active'}`}
              onClick={() => setSelectedTab("Home")}>
              <FaHouse className='sidebar-logos' />
              Home
            </a>
          </li>
          <li>
            <a href="#" className={`nav-link text-white ${selectedTab === 'Create Post' && 'active'}`}
              onClick={() => setSelectedTab("Create Post")}>
              <BiSolidPlusSquare className='sidebar-logos' />
              Create Post
            </a>
          </li>

        </ul>

        {/* <hr className="hr"/> */}

        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown" aria-expanded="false">
            <FaUserCircle width="32" height="32" className="rounded-circle me-2" />
            <strong>user</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar