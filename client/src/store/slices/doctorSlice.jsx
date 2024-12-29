import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = new createSlice({
    name:'doctor',
    initialState:[],

    reducers:{
        doctorInfo(state,action){
            state.push(action.payload);
        }
    }
})

export const {userinfo} = userSlice.actions;