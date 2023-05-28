import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={`${who.avatarIcon}`}/>
     </div>
     <div className="col-8">
       <div className="fw-bold">{who.userName}</div>
       <div>@{who.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;

