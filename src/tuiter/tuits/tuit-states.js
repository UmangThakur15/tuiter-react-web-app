import React from "react";
import '../../vendors/bootstrap-icons/font/bootstrap-icons.min.css';
import './tuit.css';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";



const TuitStates = (
    {
      tuit = {"_id": 123, "topic": "Space", "userName": "SpaceX",
      "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "time": "2h",   "image": "https://th.bing.com/th/id/R.e488777d759169c74b74aa95f07adbed?rik=VWCMNP%2fO1MdzWQ&riu=http%3a%2f%2fwww.carlogos.org%2flogo%2fTesla-logo-2003-2500x2500.png&ehk=JNBLiptu%2fRFyW%2fKfTZ0WnRm0dTAAOD2QoMqcnnk71e0%3d&risl=&pid=ImgRaw&r=0",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
     }
    }
) => {
    const dispatch = useDispatch();
    console.log("id" , tuit._id)
 return(
    <div className="row">
        <div className="col-3 d-flex">
            <i className="bi bi-chat pe-2"></i> {tuit.replies}
            <i className="bi bi-arrow-repeat ps-5 pe-2"></i> {tuit.retuits}
            <i onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))} className={`bi  ps-5 pe-2 ${tuit.liked ? "bi-heart-fill redcolor" : "bi-heart"}`}></i> {tuit.likes}
            <i onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: true }))} className={`bi  ps-5 pe-2 ${tuit.disliked ? "bi-hand-thumbs-down-fill bluecolor" : "bi-hand-thumbs-down"}`}></i> {tuit.dislikes}
            <i className="bi bi-upload ps-5"></i>
        </div>
    </div>
 );
};
export default TuitStates;