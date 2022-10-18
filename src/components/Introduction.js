import mosque from "../images/mosque.jpg"
import cooking from "../images/ismu-cooking.jpeg"
import members from "../images/ismu_members.jpeg"
import charity from "../images/Donate-to-Charity-768x505.jpg"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { useNavigate,Link } from "react-router-dom"


const Introduction = () => {

    const navigate = useNavigate()

    return ( 
        <div className="home-page">
        <div className="home-intro">
            <img src={mosque} alt = "mmu-mosque"/> 
            <aside>
                <p>
                    Islamic Society of Multimedia University.<br/>A society build in Quran and Sunnah aimed at making a transformative nation.
                </p>
                <Link to = "/about">
                    read more 
                    <FontAwesomeIcon 
                        icon={faArrowUpRightFromSquare}
                        className = "link-icon"/>
                </Link>
            </aside>
        </div>

        <div className="activity-snip">
            <img 
                src= {cooking} 
                alt="ismu cooks" />
            <p>
                ISMU cooks and sells food to raise money to facilitate club 
                operations besides the monthly contributions by its members.
            </p>
            <button onClick={() => navigate('/activities')}>view activities</button>
        </div>

        <div className="carousel">
            <img 
                src={members} 
                alt="ismu-members" />
            <p>Ismu members striking a pose outside Mulimedia University Masjid after conducting their Jumuah prayer.</p>
            <p>
                <a href = "https://drive.google.com/drive/folders/1gJZMS9B2sScHfi_Z8risE7TIvYmGFuXv?usp=sharing">
                view more  
                <FontAwesomeIcon 
                icon={faArrowUpRightFromSquare} 
                className = "link-icon"/>
                </a>
            </p>
        </div>
        <div>
            <img 
                src={charity} 
                alt="charity" />
            <p>Ismu is a society based on doing charity.We together prosper due to small acts of charity despite how small they may be.Be among the charitables...</p>
            <button onClick={() => navigate('/donate')}>
                donate
            </button>
        </div>
        
        </div>
     );
}
 
export default Introduction;