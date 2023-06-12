import {createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk,createTuitThunk,deleteTuitThunk,findTuitsThunk} from "../services/tuits-thunks";
const initialState = {
   tuits: [],
   loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://th.bing.com/th/id/R.dfe000c4d39e10adeac73e968d0081c0?rik=2qecWrg5GwkLaA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnasa-logo-png-nasa-logo-1664.png&ehk=d%2bgvuoNz%2b0udsBSxL%2bAGF0N%2f1tWoj4H6GaKOJhRCIyQ%3d&risl=&pid=ImgRaw&r=0",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   
const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
   

   [createTuitThunk.fulfilled]:
   (state, { payload }) => {
     state.loading = false
     state.tuits.push(payload)
 },

   
   [deleteTuitThunk.fulfilled] :
   (state, { payload }) => {
   state.loading = false
   state.tuits = state.tuits .filter(t => t._id !== payload)
 },

   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = [] },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload },
   [findTuitsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
   [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
  }

 },


 reducers: {
   //  deleteTuit(state, action) {
   //      const index = state.tuits
   //         .findIndex(tuit =>
   //            tuit._id === action.payload);
   //      state.tuits.splice(index, 1);
   //    },
   
   //  createTuit(state, action) {
   //    state.tuits.unshift({
   //      ...action.payload,
   //      ...templateTuit,
   //      _id: (new Date()).getTime(),
   //    })
   //  }
  }
 
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;