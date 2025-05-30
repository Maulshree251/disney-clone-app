import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { movieSlice } from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    movie: movieSlice.reducer
  },
});

export default store;