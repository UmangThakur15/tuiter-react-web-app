import React from "react";
import '../../vendors/bootstrap-icons/font/bootstrap-icons.min.css';
import './tuit.css';

const TuitStats = (
    {
        tuit_stats = {"liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345}
      }
) => {
 return(
    <div className="row">
        <div className="col-3 d-flex">
            <i className="bi bi-chat pe-2"></i> {tuit_stats.replies}
            <i className="bi bi-arrow-repeat ps-5 pe-2"></i> {tuit_stats.retuits}
            <i className={`bi  ps-5 pe-2 ${tuit_stats.liked ? "bi-heart-fill redcolor" : "bi-heart"}`}></i> {tuit_stats.likes}
            <i className="bi bi-upload ps-5"></i>
        </div>
    </div>
 );
};
export default TuitStats;
