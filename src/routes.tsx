import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import Home from  './pages/Home';
import Login from "./pages/Login";



const Routes = () => {
   return(
     <BrowserRouter>
      <ReactRoutes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />}/>
        </ReactRoutes>
       </BrowserRouter>
   )
}

export default Routes;