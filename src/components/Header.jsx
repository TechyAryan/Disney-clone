import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState } from "../features/user/userslice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {  

   const dispatch = useDispatch();
   const userName = useSelector(selectUserName);
   const userEmail = useSelector(selectUserEmail);
   const userPhoto = useSelector(selectUserPhoto);
   const navigate = useNavigate();
   const sanitizedPhotoURL = userPhoto?.replace("=s96-c", "=s200");  // Change size to avoid caching issues

   const [showSignOut, setShowSignOut] = useState(false);

   useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
         if (user) {
            setUser(user);
            navigate("/home");
         }
      });
   }, [userName]);

   const handleAuth = () => {
      if(!userName){
         signInWithPopup(auth, googleProvider)
         .then((result) => {
            setUser(result.user);
         })
         .catch((error) => {
            alert(error.message);
         });
      }else if(userName){
         auth.signOut().then(() => {
            dispatch(setSignOutState());
            navigate("/");
         }).catch((err) => alert(err.message))
      }
   };

   const setUser = (user) => {
      dispatch(
         setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
         })
      );
   };

   return (
      <nav className="fixed top-0 left-0 right-0 bg-[#090b13] h-[100px] flex justify-between items-center px-[36px] tracking-widest z-[3]">
         <a className="mt-2 inline-block flex-shrink-0">
            <img src="/images/logo.svg" alt="Disney+" className="block w-full h-[70px] mb-3" />
         </a>
         {!userName ? (
            <a
               onClick={handleAuth}
               className="font-bold px-[20px] py-[10px] border border-white rounded-md text-xl text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#090b13]">
               LOGIN
            </a>
         ) : (
            <>
               <div className="hidden xl:flex justify-end h-full items-center relative mr-auto ml-[150px] gap-[25px]">
                  <a href="/home" className="flex items-center gap-[15px]">
                     <img className="w-[30px]" src="/images/home-icon.svg" alt="Home" />
                     <span className="text-white text-[15px] font-semibold relative group">HOME</span>
                  </a>
                  <a href="/search" className="flex items-center gap-[15px]">
                     <img className="w-[30px]" src="/images/search-icon.svg" alt="Search" />
                     <span className="text-white text-[15px] font-semibold relative group">SEARCH</span>
                  </a>
                  <a href="/watchlist" className="flex items-center gap-[15px]">
                     <img className="w-[30px]" src="/images/watchlist-icon.svg" alt="Watchlist" />
                     <span className="text-white text-[15px] font-semibold relative group">WATCHLIST</span>
                  </a>
                  <a href="/originals" className="flex items-center gap-[15px]">
                     <img className="w-[30px]" src="/images/original-icon.svg" alt="Originals" />
                     <span className="text-white text-[15px] font-semibold relative group">ORIGINALS</span>
                  </a>
                  <a href="/movies" className="flex items-center gap-[15px]">
                     <img className="w-[30px]" src="/images/movie-icon.svg" alt="Movies" />
                     <span className="text-white text-[15px] font-semibold relative group">MOVIES</span>
                  </a>
                  <a href="/series" className="flex items-center gap-[15px]">
                     <img className="w-[30px]" src="/images/series-icon.svg" alt="Series" />
                     <span className="text-white text-[15px] font-semibold relative group">SERIES</span>
                  </a>
               </div>
               <div
                  className="relative cursor-pointer flex justify-center items-center"
                  onMouseEnter={() => setShowSignOut(true)}
                  onMouseLeave={() => setShowSignOut(false)}>
                  <img className="rounded-[50%] h-[70px]" src={userPhoto} alt={userName}/>
                  <div
                     onClick={handleAuth}
                     className={`absolute text-center w-[140px] top-[75px] right-0 tracking-[3px] bg-[rgb(19,19,10)] rounded-md border-solid border-1 border-[rgba(151,151,151,0.34)] p-[10px] text-[20px] transition-opacity duration-300 ${showSignOut ? 'opacity-100' : 'opacity-0'}`}>
                     Sign out
                  </div>
               </div>
            </>
         )}
      </nav>
   );
};

export default Header;
