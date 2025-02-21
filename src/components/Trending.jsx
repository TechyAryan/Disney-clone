import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movies/movieslice";

const Trending = (props) => {

   const movies = useSelector(selectTrending);

   return(
      <div className="flex flex-col gap-[30px] mb-7">
         <h6 className="text-[25px]">Trending</h6>
         <div className="p-[0 0 30px] grid gap-[25px] md:grid-cols-4 grid-cols-2">
            {movies && movies.map((movie,key) => (
               <Wrap key={key}>
                  {movie.id}
                  <Link to={"/detail/"+movie.id}>
                      <img src={movie.cardImg} alt={movie.title} />
                  </Link>
               </Wrap>
            ))}
         </div>
      </div>
   )
} 

const Wrap = styled.div`
   padding-top: 50%;
   cursor: pointer;
   border-radius: 10px;
   box-shadow: rgb(0 0 0/69%) 0px 30px 35px -10px, rgb(0 0 0/73%) 0px 20px 15px -10px;
   overflow: hidden;
   position: relative;
   transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
   border: 4px solid rgba(249,249,249,0.1);

   img {
      inset: 0px;
      display: block;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      width: 100%;
      transition: opacity 500ms ease-in-out 0s;
      z-index: 1;
      top: 0;
   }

   &:hover {
      box-shadow: rgb(0 0 0/69%) 0px 40px 55px -20px, rgb(0 0 0/73%) 0px 30px 20px -10px;
      transform: scale(1.05);
      border-color: rgba(249,249,249,0.8);
   }
`

export default Trending;