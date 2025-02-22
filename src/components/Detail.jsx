import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure db is properly initialized

const Detail = () => {
   const { id } = useParams();
   const [detailData, setDetailData] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchMovieDetails = async () => {
         if (!id) return;

         try {
            const docRef = doc(db, "movies", id); // Corrected query
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
               setDetailData(docSnap.data());
            } else {
               console.log("No such document in Firebase");
            }
         } catch (error) {
            console.error("Error getting document:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchMovieDetails();
   }, [id]);

   if (loading) {
      return <div className="text-white text-center mt-10">Loading...</div>;
   }

   if (!detailData) {
      return <div className="text-white text-center mt-10">Movie not found.</div>;
   }

   return (
      <div className="relative block overflow-x-hidden min-h-screen top-[100px]">
         {/* Background Image */}
         <div className="absolute inset-0 left-0 right-0 top-0 opacity-[0.8] z-[-1]">
            <img className="w-full h-full object-cover" src={detailData.backgroundImg} alt={detailData.title} />
         </div>

         {/* Movie Title Image */}
         <div className="relative z-1 mt-[100px] ml-[25px]">
            <img className="w-[50vw] max-w-[600px] md:max-w-[600px] object-contain" src={detailData.titleImg} alt={detailData.title} />
         </div>

         {/* Buttons */}
         <div className="max-w-[874px] mt-[50px] mb-[50px]">
            <div className="mx-[25px] flex flex-row gap-3">
               {/* Play Button */}
               <button className="flex items-center justify-center p-[15px] md:p-[25px] h-[50px] md:h-[56px] cursor-pointer tracking-wider rounded-sm bg-[rgb(249,249,249)] text-[rgb(0,0,0)] text-[15px] md:text-[20px] hover:bg-[rgb(198,198,198)] transition w-[100px] md:w-auto">
                  <img className="w-[32px]" src="/images/play-icon-black.png" alt="Play" />
                  <span className="font-semibold">PLAY</span>
               </button>

               {/* Trailer Button */}
               <button className="flex items-center justify-center border-2 border-white p-[15px] md:p-[25px] h-[50px] md:h-[56px] cursor-pointer tracking-wider rounded-sm bg-[rgba(0,0,0,0.3)] text-white text-[15px] md:text-[20px] w-auto hover:bg-[rgba(0,0,0,0.6)] transition">
                  <img className="w-[32px]" src="/images/play-icon-white.png" alt="Trailer" />
                  <span className="font-medium">TRAILER</span>
               </button>
            </div>
         </div>

         {/* Subtitle */}
         <div className="ml-[25px] text-[20px]  text-[rgb(249,249,249)]">{detailData.subTitle}</div>

         {/* Description */}
         <div className="ml-[25px] text-[25px] text-[rgb(249,249,249)] py-[50px] max-w-[1000px]">{detailData.description}</div>
      </div>
   );
};

export default Detail;
