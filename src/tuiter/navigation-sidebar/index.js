import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../vendors/bootstrap/all.min.css';


const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = [{name : "home", image : "fa-home"},    {name : "explore", image : "fa-hashtag"},  
                {name : "notifications", image : "fa-bell"}, {name : "messages", image: "fa-envelope"}, 
                {name : "bookmarks", image : "fa-bookmark"}, {name : "lists", image : "fa-list"}, {name : "more", image : "fa-ellipsis"}];
  console.log("user : ", currentUser)
 return (
   <div className="list-group">
     {!currentUser && <Link className={`list-group-item ps-1 text-capitalize col d-flex ${active === "login" ? "active" : ""}`} to="/tuiter/login"> 
        <i className={`bi bi-key-fill bi-solid col-12 col-xl-2 col-xxl-2 fa-lg border-0 pb-2 list-group-item text-capitalize ${active === "login" ? "active" : ""}`}></i>
          <div className={'d-none d-xl-block d-xxl-block ps-4'}>Login</div>
     </Link>}
     {!currentUser && <Link className={`list-group-item ps-1 text-capitalize col d-flex ${active === "register" ? "active" : ""}`} to="/tuiter/register"> 
        <i className={`bi bi-person-plus-fill bi-solid col-12 col-xl-2 col-xxl-2 fa-lg border-0 pb-2 list-group-item text-capitalize ${active === "register" ? "active" : ""}`}></i>
          <div className={'d-none d-xl-block d-xxl-block ps-4'}>Register</div>
     </Link>
     }
     { currentUser && <Link className={`list-group-item ps-1 text-capitalize col d-flex ${active === "profile" ? "active" : ""}`} to="/tuiter/profile"> 
        <i className={`fa fa-user pe-2 pt-2 fa-solid col-12 col-xl-2 col-xxl-2 fa-solid fa-lg border-0 pb-2 list-group-item text-capitalize ${active === "profile" ? "active" : ""}`}></i>
          <div className={'d-none d-xl-block d-xxl-block ps-4'}>Profile</div>
     </Link>}
     {links.map((link) => 
         <Link to={`/tuiter/${link.name}`} className={`list-group-item ps-1 text-capitalize col d-flex ${active === link.name ? "active" : ""}`}>
          
          <i className={`fa ${link.image} pe-2 pt-2 fa-solid col-12 col-xl-2 col-xxl-2 fa-solid fa-lg border-0 pb-2 list-group-item text-capitalize ${active === link.name ? "active" : ""}`}></i>
          <div className={'d-none d-xl-block d-xxl-block ps-4'}>{link.name}</div>
         </Link>
         
     )}
     
   </div>
 );
};
export default NavigationSidebar;