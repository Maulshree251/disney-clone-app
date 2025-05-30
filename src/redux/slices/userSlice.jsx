import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: '',
        email: '',
        photo: ''
    },

    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setSignOutState: (state) =>{
            state.name= null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const {setUserLoginDetails, setSignOutState} = userSlice.actions;
export default userSlice.reducer;
