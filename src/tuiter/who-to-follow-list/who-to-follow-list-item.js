import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://th.bing.com/th/id/OIP.7HdKdZHNfDgz7832n2aLZAHaHg?pid=ImgDet&rs=1' }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-3">
       <img className="rounded-circle" height={48} src={`${who.avatarIcon}`}/>
     </div>
     <div className="col-2">
       <div className="fw-bold">{who.userName}</div>
       <div>@{who.handle}</div>
     </div>
     <div className="col-7">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;