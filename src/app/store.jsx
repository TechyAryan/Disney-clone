import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userslice";
import movieReducer from "../features/movies/movieslice";

export default configureStore({
   reducer: {
      user: userReducer,
      movie: movieReducer,
   },
   middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});
