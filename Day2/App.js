import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import {Routes} from 'react-router-dom';
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Navigator from "./Component/Dashboard/Navigator";
import Header from "./Component/Dashboard/Header";
import Paperbase from "./Component/Dashboard/Paperback";
import Content from "./Component/Dashboard/Content";


function App() {
  return (
    <div className="App" >
      
      <Home/>
      
      {/* <Paperbase/>   */}
  
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/paperbase" element={<Paperbase/>} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
