import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";

function App() {
   return (
       <BrowserRouter>
           <div className="container">
               <HelloWorld/>
               <Labs/>
               <Tuiter/>
           </div>
       </BrowserRouter>
   );
}
export default App;