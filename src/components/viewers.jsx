import styled from "styled-components";

const Viewers = (props) => {
   return(
      <div className="mt-[50px] mb-[30px] grid gap-[25px] md:grid-cols-5 grid-cols-1">
         <Wrap>
            <img src="/images/viewers-disney.png"></img>
            <video autoPlay={true} loop={true} playsInline={true}>
               <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
            </video>
         </Wrap>
         <Wrap>
            <img src="/images/viewers-pixar.png"></img>
            <video autoPlay={true} loop={true} playsInline={true}>
               <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
            </video>
         </Wrap>
         <Wrap>
            <img src="/images/viewers-marvel.png"></img>
            <video autoPlay={true} loop={true} playsInline={true}>
               <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
            </video>
         </Wrap>
         <Wrap>
            <img src="/images/viewers-starwars.png"></img>
            <video autoPlay={true} loop={true} playsInline={true}>
               <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
            </video>
         </Wrap>
         <Wrap>
            <img src="/images/viewers-national.png"></img>
            <video autoPlay={true} loop={true} playsInline={true}>
               <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
            </video>
         </Wrap>
      </div>
   )
}

const Wrap = styled.div`
   border: 4px solid rgba(249, 249, 249,0.1);
   border-radius: 10px;
   box-shadow: rgb(0 0 0/69%) 0px 30px 35px -10px, rgb(0 0 0/73%) 0px 20px 15px -10px;
   cursor: pointer;
   overflow: hidden;
   position: relative;
   transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);

   img{
      display: block;
      height: 100%;
      object-fit: cover;
      inset: 0px;
      position: absolute;
      opacity: 1;
      transition: opacity 500ms ease-in-out 0s;
      width: 100%;
      z-index: 1;
      top: 0;
   }

      video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 500ms ease-in-out;
   }

   &:hover{
      box-shadow: rgb(0 0 0/69%) 0px 40px 55px -20px, rgb(0 0 0/73%) 0px 30px 20px -10px;
      transform: scale(1.05);
      border-color: rgba(249,249,249,0.8);
   }

   &:hover video {
      opacity: 1;
   }  
`

export default Viewers;