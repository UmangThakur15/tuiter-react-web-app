import axios from 'axios';
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
// const TUITS_API = `${SERVER_API_URL}/tuits`;
const API_BASE = process.env.REACT_APP_SERVER_API_URL;
const TUITS_API = `${API_BASE}/tuits`;
// const TUITS_API = 'http://localhost:4000/api/tuits';
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
   }
   
export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
   }
   
   export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
  }
  
  export const updateTuit = async (tuit) => {
    const response = await axios
      .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
  }
  