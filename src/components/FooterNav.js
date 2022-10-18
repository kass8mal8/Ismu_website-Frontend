import { Link } from "react-router-dom"

const FooterNav = () => {
    return (
        <div className="footer-nav">
            <Link to = '/'> Home </Link>
            <Link to = '/about'>About Ismu</Link>
            <Link to = '/activities'>Ismu Activities</Link>
            <Link to = '/contacts'>Contact</Link>
            <Link to = '/donate' >Donate</Link>
        </div>
     );
}
 
export default FooterNav;