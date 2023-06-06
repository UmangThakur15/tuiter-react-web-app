import React from "react";
import TuitsList from "./tuits/index";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
 return(
   <div>
     <h1>Home</h1>
     <WhatsHappening/>
     <TuitsList/>
   </div>
 );
};
export default HomeScreen;