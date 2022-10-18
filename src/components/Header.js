import logo from "../images/ismu-logo.png"
import "../styles/header.css"
import menu from "../images/icon-hamburger.svg"
import SideNav from "./SideNav"


const Header = () => {

    const handleToggle = () => {
        document.querySelector('.header nav').classList.toggle('active')
    }

    

    return ( 
        <div className="header">
            
            <ul>
                <li>
                    <img 
                        src={logo} 
                        width = "50" 
                        alt="ismu-logo"
                        className="logo"/>
                </li>
                <li>
                    <img 
                        src={menu} 
                        alt = "hamburger"
                        className="menu-icon" 
                        onClick={handleToggle}/>
                </li>
                <SideNav 
                    handleToggle = {handleToggle}/>
            </ul>
            
        </div>
     );
}
 
export default Header;