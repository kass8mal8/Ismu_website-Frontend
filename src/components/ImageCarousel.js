import treasurer from "../images/treasurer.png"
import chairperson from "../images/chairperson.png"
import chairlady from "../images/sara.jpeg"
import tendeka from "../images/tendeka.png"
import shukri from "../images/shukri.png"
import harun from "../images/harun.png"
import boru from "../images/boru.png"
import secretary from "../images/secretary.jpeg"

import { faTwitter,faFacebookSquare,faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons' 
import {useState} from "react"

const ImageCarousel = () => {
    const  [current, setCurrent] =useState(0)
    
    const officials = [
        {src:chairperson,name:"Said Juma",role:'Chairperson',course:'Bsc Procurement',id:1},
        {src:chairlady,name:"Sara Ibrahim",role:'Chairlady',course:'Elctrical Engineering',id:2},
        {src:harun,name:"Harun Rashid",role:'Amir Daawa',course:'Renewable Energy',id:3},
        {src:treasurer,name:"Musa Muthina",role:'Treasurer',course:'Analytical Chemistry',id:4},
        {src:shukri,name:"Abdishukri",role:'Vice Chair',course:'Bsc Economics',id:5},
        {src:tendeka,name:"Suleiman Tendeka",role:'Organizing Secretary',course:'Communication and Digitial Media',id:6},
        {src:boru,name:"Mohamed Boru",role:"Society Discipline",course:"Renewable Energy",id:7},
        {src:secretary,name:'Suleiman Chege',role:"Secretary",course:"Film and Animation",id:8}
    ]

    const length = officials.length
    const handleNext = () => {
        setCurrent (current === length - 1 ? 0 : current + 1)
    }

    const handlePrev= () => {
        setCurrent (current === 0 ? length - 1 : current - 1)
    }
    return ( 
        <div className="slider">
            <FontAwesomeIcon icon={faAngleLeft} onClick = {handlePrev} className = "left-arrow"/>
            <FontAwesomeIcon icon={faAngleRight} onClick = {handleNext} className = "right-arrow"  />
            {officials.map((official,index) => (
                <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                    {index === current && (
                        <div>
                            <img src = {official.src} alt = "official" className="image"/>
                            <h3> {official.name} </h3>
                            <p> {official.role} <br/> {official.course}</p>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon = {faTwitter} className ="social" />
                                    <FontAwesomeIcon icon = {faInstagram} className = "social-insta" />
                                    <FontAwesomeIcon icon = {faFacebookSquare} className = "social"/>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
     );
}
 
export default ImageCarousel;