import { useRef } from 'react';
import logo from '../assets/Reddit_Logo.webp'
import { BsThreeDots } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Header = ({ setSignUpToggle, setSidebarOpener }) => {

  let sidebarTogglerRef = useRef(false);

  function handleSidebarToggle() {
    sidebarTogglerRef.current = !(sidebarTogglerRef.current);
    setSidebarOpener(sidebarTogglerRef.current);
  }

  return (
    <div className='main-header'>

      <div className='sidebar-opener' onClick={handleSidebarToggle}><FaBars /></div>

      <a className="logo-section">
        <img height="32px" width="32px" src={logo} alt="logo" />
        <p>reddit</p>
      </a>

      <div className="search-section">
        <input
          type="text"
          className="custom-input"
          placeholder='Search Reddit'
        />
      </div>
      <div className="login-section">
        <button type="button" className="btn btn-app" onClick={() => setSignUpToggle(true)}>Sign Up</button>
        <button type="button" className="btn btn-login">LogIn</button>
        <div className="settings"> <BsThreeDots /> </div>
      </div>
    </div>
  )
}

export default Header