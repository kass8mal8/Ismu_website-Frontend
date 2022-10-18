import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import {faTiktok,faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const FooterLinks = () => {
    return ( 
        <ul>
            <li>
                <a href = "https://www.facebook.com/ISMUOfficial/">
                <FontAwesomeIcon 
                    icon={faFacebookSquare}
                    className = "footer-icons"/>
                </a>
            </li>
            <li>
                <a href= "https://www.tiktok.com/@ismufamily">
                <FontAwesomeIcon 
                    icon={faTiktok}
                    className = "footer-icons"/>
                </a>
            </li>
            <li>
                <a href = "mailto:islamicsocietymmu@gmail.com">
                <FontAwesomeIcon 
                    icon={faEnvelope}
                    className = "footer-icons"/>
                </a>
            </li>
            <li>
            <a href = "mailto:islamicsocietymmu@gmail.com">
                <FontAwesomeIcon 
                    icon={faWhatsapp}
                    className = "footer-icons"/>
                </a>
            </li>
                
        </ul>
     );
}
 
export default FooterLinks;