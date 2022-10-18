import close_icon from "../images/icon-close.svg"
import {Link} from 'react-router-dom'


const SideNav = ({handleToggle}) => {


    return ( 
        <nav>
            <li>
                <img 
                    src={close_icon} 
                    alt="close-icon"
                    className="close-icon" 
                    onClick={handleToggle}/>
            </li>
            
            <li>
                <h3><Link to="/">Home</Link></h3>
            </li>
            
            <li>
                <h3><Link to="/about">About Ismu</Link></h3>
            </li>
            <li>
                <h3><Link to = "/activities">Ismu Activities</Link></h3>
            </li>
            
            <li>
                <h3><Link to = "/donate">Donate</Link></h3>
            </li>

            <li>
                <h3><Link to = "/contacts">Contact</Link></h3>
            </li>
        </nav>
     );
}
 
export default SideNav;