import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";


import Register from './register';
import Login from './welcome';
import Profile from './profile';
import EmployeeList from './employeelist';
import UpdateEmployee from './updateEmployee';
import AddEmployement from './addEmployement';
import UpdateProfile from './updateProfile';



function App() {
  return (
    <Router>
<div className="App">
  <Routes>
    <Route exact path="/" element={<Login />} />  

    <Route exact path="/register" element={<Register />} />

    <Route exact path="/profile" element={<Profile />} />

    <Route exact path="/employeelist" element={<EmployeeList />} />

    <Route exact path="/addEmployement" element={<UpdateEmployee />} />
    
    <Route exact path="/updateEmployee" element={<AddEmployement />} />

    <Route exact path="/updateProfile" element={<UpdateProfile />} />

    
    
    </Routes>    
    
    </div>
    </Router>
    
  );
}

export default App;
