import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick.css"
import act2 from "../images/img_act2.jpg"
import act3 from "../images/img_act3.jpg"
import act4 from "../images/img_act4.jpg"
import act5 from "../images/img_act5.jpg"
import act6 from "../images/img_act6.jpg"

const ImageActivitiesCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        swipeToSlide:true,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      const images = [
        {src:act2,id:2},
        {src:act3,id:3},
        {src:act4,id:4},
        {src:act5,id:5},
        {src:act6,id:6}
      ]

    return ( 
        
        <Slider {...settings}>
          {images.map(image => (
            <div key={image.id} className = "slider-images">
              <img src={image.src} alt="none" />
            </div>
          ))}
        </Slider>
     );
}
 
export default ImageActivitiesCarousel;