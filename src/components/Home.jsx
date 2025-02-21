import ImgSlider from "./ImgSlider";
import Viewers from "./viewers";
import Recommends from "./recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";  //
import { setMovies } from "../features/movies/movieslice";
import { selectUserName } from "../features/user/userslice";
import { collection, onSnapshot } from "firebase/firestore"; //

const Home = () => {
   const dispatch = useDispatch();
   const username = useSelector(selectUserName);

   useEffect(() => {
      const moviesCollection = collection(db, "movies"); 

      const unsubscribe = onSnapshot(moviesCollection, (snapshot) => {
         let recommends = [];
         let newDisneys = [];
         let originals = [];
         let trendings = [];

         snapshot.docs.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() };
            switch (data.type) {
               case "recommend":
                  recommends.push(data);
                  break;
               case "new":
                  newDisneys.push(data);
                  break;
               case "original":
                  originals.push(data);
                  break;
               case "trending":
                  trendings.push(data);
                  break;
            }
         });

         dispatch(
            setMovies({
               recommend: recommends,
               newDisney: newDisneys,
               original: originals,
               trending: trendings,
            })
         );
      });

      return () => unsubscribe();
   }, [username, dispatch]);

   return (
      <main 
         className="relative h-screen block min-h-[calc(100vh-250px)] pt-[130px] px-[calc(3.5vw+5px)] overflow-x-hidden"
         style={{ backgroundImage: "url('/images/home-background.png')", backgroundSize: "cover", backgroundPosition: "top center", backgroundRepeat: "no-repeat" }}>
         
         <ImgSlider />
         <Viewers />
         <Recommends />
         <NewDisney />
         <Originals />
         <Trending />
      </main>
   );
};

export default Home;
