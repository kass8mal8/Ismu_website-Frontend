import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons' 


const ImageSlider=()=>{
  const  [slideIndex, setSlideIndex] =useState(1)
  const images=[
  {src:"./images/product-1.jpg",id:1}, 
  {src:"./images/product-2.jpg",id:2},
  {src:"./images/product-3.jpg",id:3},
  {src:"./images/product-4.jpg",id:4}
] 

const handleNext=()=>{
   if(slideIndex !== images.length ){
     setSlideIndex(slideIndex+1)
   }
   else{
     setSlideIndex(slideIndex-1)
   }
}

const handlePrev=()=>{
    setSlideIndex(slideIndex==1 ? images.length-1  :slideIndex-1)
 }
 
  return(
    <div className ="m-div--image">
        <div className="m-div--image-icons">
        <ul>
         <li>
           <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrev} />
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleRight} onClick={handleNext}/>
       </li>
      </ul>    
    </div>


      {images.map((image) =>
        (
          <div className={slideIndex === image.id ?  'slide active' : 'slide'} key={image.id}>
            {slideIndex === image.id && (<img src={image.src} />)  }
          </div>
        )
        )}
    </div>
  )
}
export default ImageSlider