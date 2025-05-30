import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newDisney: null,
    originals: null,
    trending: null
}

 export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) =>{
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.originals = action.payload.originals;
            state.trending = action.payload.trending;
        },

    }
})

export const {setMovies} = movieSlice.actions;
export default movieSlice.reducer;