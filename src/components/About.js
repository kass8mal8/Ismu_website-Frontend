import "../styles/about.css"
import ImageCarousel from "./ImageCarousel"
import islam from "../images/islam-illustration.webp"
import {useNavigate} from "react-router-dom"

const About = () => {

    const navigate = useNavigate()

    return ( 
        <div className="about">
            <div>
                <img 
                    src={islam} 
                    alt="islam" 
                    className="islam"/>
                <p>ISMU a society based on sunnah and quran following the path of Allah SW and His beloved prophet Muhammad SAW. </p>
                <p>Core values:</p>
                <ul>
                    <li>Honesty</li>
                    <li>Integrity</li>
                    <li>Charity</li>
                </ul>
                <button onClick={() => navigate('/ismu-joining')}>join ismu</button>
            </div>
            <div>
                <h3 style = {{textAlign:'center'}}>ISMU  Officials</h3>
                <ImageCarousel />
            </div>
            
        </div>
     );
}
 
export default About;