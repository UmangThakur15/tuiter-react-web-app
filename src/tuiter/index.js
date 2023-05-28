import { Routes, Route } from "react-router";

import Nav from "../nav";

import NavigationSidebar from "./navigation-sidebar";

import HomeScreen from "./home-screen"

import ExploreScreen from "./explore-screen"

import BookmarksScreen from "./bookmarks-screen"

import ProfileScreen from "./profile-screen"

import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";

import WhoToFollowList from "./who-to-follow-list";

import TuitSummaryItem from "./tuit-summary-list/tuit-summary-item"

import TuitSummaryList from "./tuit-summary-list"






function Tuiter() {

return (

   <div>

     <Nav />

     <div className="row">




       <div className="col-2">

         <NavigationSidebar />

       </div>

       <div className="col-7">

        <Routes>

        <Route path="/home" element={<HomeScreen />} />

        <Route path="/explore" element={< ExploreScreen/>} />

        <Route path="/bookmarks" element={<BookmarksScreen />} />

        <Route path="/profile" element={<ProfileScreen />} />

        </Routes>

       </div>

     

       <div className="col-3">

      {/* <WhoToFollowListItem />

<WhoToFollowListItem who={{

  userName: "Tesla",

  handle: "tesla",

  avatarIcon: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"}} />

<WhoToFollowListItem who={{

  userName: "SpaceX",

  handle: "spacex",

  avatarIcon: "https://i.pinimg.com/originals/b6/12/2e/b6122e067cad4cde07468d6627544989.png"}} /> */}

  <WhoToFollowList/>

  

       </div>

     </div>

   </div>

);

}

export default Tuiter;