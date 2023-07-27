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
// import Home from "./Component/Home";
import Dashboard from "./Component/Dashboard/Dashboard";
import Bookings from "./Component/Dashboard/AdminDash/Bookings";
import AdminServices from "./Component/Dashboard/AdminDash/AdminServices";
import AdminBillings from "./Component/Dashboard/AdminDash/AdminBillings";
import AddRoom from "./Component/Dashboard/AdminDash/AddRoom";
import DeleteRoom from "./Component/Dashboard/AdminDash/DeleteRoom";
import UpdateRoom from "./Component/Dashboard/AdminDash/UpdateRoom";
import ListRoom from "./Component/Dashboard/AdminDash/ListRoom";


function App() {
  return (
    <div className="App" >
      
      {/* <Home/> */}
      
      {/* <Paperbase/>   */}
  
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/paperbase" element={<Paperbase/>} />
        <Route path='/adminBookings' element={<Bookings/>}/>
        <Route path='/adminBillings' element={<AdminBillings/>}/>
        <Route path='/adminServices' element={<AdminServices/>}/>
       
              <Route path="/addRoom" element={<AddRoom/>} />
                <Route path="/updateRoom" element={<UpdateRoom/>} />
                <Route path="/deleteRoom" element={<DeleteRoom/>} />
                <Route path="/listRoom" element={<ListRoom/>} />
                {/* <Route path="/adminBillings" element={<AdminBillings/>} /> */}
                
        
      </Routes>
    </div>
  );
}

export default App;
