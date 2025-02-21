import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
   let settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true, 
   };

   return (
      <div className="relative">
         <Carousel {...settings}>
            <Wrap>
            <a>
               <img className="w-full" src="/images/slider-badag.jpg" alt="Slide 1" />
            </a>
            </Wrap>
            <Wrap>
            <a>
               <img className="w-full" src="/images/slider-scale.jpg" alt="Slide 2" />
            </a>
            </Wrap>
            <Wrap>
            <a>
               <img className="w-full" src="/images/slider-badging.jpg" alt="Slide 3" />
            </a>
            </Wrap>
            <Wrap>
            <a>
               <img className="w-full" src="/images/slider-scales.jpg" alt="Slide 4" />
            </a>
            </Wrap>
         </Carousel>
      </div>
   );
};

const Carousel = styled(Slider)`


   & > button {
      opacity: 0;
      height: 100%;
      width: 5vw;
      z-index: 1;
      transition: opacity 0.25s ease;

      &:hover {
         opacity: 1;
      }
   }

   .slick-dots li button:before {
      font-size: 14px;
      color: rgb(150, 150, 171);
   }
   
   .slick-dots li.slick-active button:before {
      color: white;
   }
   
   .slick-list {
      overflow: visible;
   }
   img {
      border-radius: 4px;
      object-fit: cover;
   }
   .slick-prev{
      left: -75px;
   }
   .slick-next{
      right: -75px;
   }
`;

const Wrap = styled.div`
   border-radius: 4px;
   cursor: pointer;
   position: relative;

   a {
      border-radius: 4px;
      box-shadow: rgb(0 0 0/69%) 0px 30px 35px -10px, rgb(0 0 0/73%) 0px 20px 15px -10px;
      cursor: pointer;
      display: block;
      position: relative;
      padding: 4px;
   }

   img{ 
      width: 100%;
      height: 100%;
   }

   &:hover{
      padding: 0;
      outline: 4px solid rgb(249,249,249);
      transition-duration: 200ms;
      outline-offset: -4px;
   }
`

export default ImgSlider;
