export const settings = {
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