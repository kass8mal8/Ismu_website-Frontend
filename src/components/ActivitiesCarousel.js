import Slider from "react-slick"
import { settings } from "./settings";
import "slick-carousel/slick/slick.css";
import "../styles/slick-theme.css";
import "../styles/slick.css"
import act5 from "../images/ismu-cooking.jpeg"
import act6 from "../images/img_act6.jpg"
import shoora from "../images/shoora.jpg"

const ImageActivitiesCarousel = () => {

      const activities = [
        {src:act6,id:1,head:"Children's Home visit",desc:"As part of charity, Ismu visits children homes to enjoy and spend time together."},
        {src:act5,id:2,head:"Selling Food ",desc:"Ismu prepares and sells food on Friday's inorder to raise money to facilitate running of the society. "},
        {src:shoora,head:"Shoora Meetings",id:3,desc:"Ismu conducts Shoora on wednesdays with its members to discuss matters pertinent to the society as well as educate each other."}
      ]

    return ( 
        
        <Slider {...settings}>

          {activities.map(activity => (
            <div key={activity.id} className = "slider-images">
              <nav>
                <img src={activity.src} alt="none" />
                <h4> {activity.head} </h4>
                <p>{activity.desc}</p>
              </nav>
            </div>
          ))}
        </Slider>
     );
}
 
export default ImageActivitiesCarousel;