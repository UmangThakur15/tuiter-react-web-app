import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../vendors/bootstrap/all.min.css';


const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = [{name : "home", image : "fa-home"},    {name : "explore", image : "fa-hashtag"},  
                {name : "notifications", image : "fa-bell"}, {name : "messages", image: "fa-envelope"}, 
                {name : "bookmarks", image : "fa-bookmark"}, {name : "lists", image : "fa-list"}, 
                {name : "profile", image : "fa-user"}, {name : "more", image : "fa-ellipsis"}];
 return (
   <div className="list-group">
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