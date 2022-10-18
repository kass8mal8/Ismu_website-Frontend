import "../styles/footer.css"
import logo from "../images/ismu-logo.png"
import FooterLinks from "./FooterLinks"
import FooterNav from "./FooterNav";


const Footer = () => {

    return ( 
        <div className="footer">
            <div className="footer-main">
                <img 
                    src={logo} 
                    width = "50" 
                    className="footer-logo"
                    alt = "logo"/>
                <p>ISMU - mbagathi Road mmu</p>
                <FooterLinks />
            </div>

            <div>
                <FooterNav />
            </div>
        </div>
     );
}
 
export default Footer;