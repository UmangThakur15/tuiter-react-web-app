import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home/home-screen";
import ExploreScreen from "./explore/explore-screen";
import BookmarksScreen from "./bookmarks/bookmarks-screen";
import ProfileScreen from "./profile/profile-screen";
import WhoToFollowList from "./who-to-follow-list/index";
import tuitsReducer from "./reducers/tuits-reducer";
import TuitSummaryList from "./tuit-summary-list/index";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
// import ProfileScreen from "./user/profile";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducers";
const store = configureStore(
  {reducer: {who: whoReducer,  tuits: tuitsReducer, user:  authReducer}});

function Tuiter() {
 return (
  <Provider store={store}>
   <div>
     <Nav />
     <div className="row">
       <div className="col-2 col-lg-2 col-xl-2 col-xxl-2 col-sm-2">
         <NavigationSidebar />
       </div>
       <div className="text-lg-start col-10 col-lg-7 col-xl-6 col-xxl-6">
         <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login"    element={<LoginScreen    />} />
           <Route path="/register" element={<RegisterScreen />} /> 
           <Route path="/profile"  element={<ProfileScreen  />} />
         </Routes>
       </div>
       <div className="col-lg-3 col-xl-3 col-xxl-3 ps-4 d-none d-lg-block">
         <WhoToFollowList />
      </div>
     </div>
   </div>
   </Provider>
 );
}
export default Tuiter;