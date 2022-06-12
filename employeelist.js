/*import pic12 from './pictures/pic12.jpg'
import pic5 from './pictures/pic5.jpg'
import pic10 from './pictures/pic10.jpg'
import pic8 from './pictures/pic8.jpg'
import pic3 from './pictures/pic3.jpg'
import pic4 from './pictures/pic4.jpg'
import pic2 from './pictures/pic2.jpg'
import pic1 from './pictures/pic1.png'
import pic6 from './pictures/pic6.jpg'*/
import pic9 from './pictures/pic9.jpg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import empList from './list.module.css';
import axios from 'axios';
function EmployeeList() {
    const axios = require("axios")
    let [employeeList, setEmployeeList] = useState([])
    useEffect( ()=> {
       axios.get('http://localhost:3000/empoyee/getAll').then((response)=> setEmployeeList(response.data))
      console.log(employeeList)
    })

    

    
    return (
        <div>
            <body>
                <div className={empList.wrapper}>
                    <div className={empList.header}>
                        <Link to="/addEmployement">Add Employee</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/">Logout</Link>
                        <h1 className={empList.h1}>Employees</h1>
                    </div>
                    <div className={empList.flexcontainer}>
                        {employeeList.map((infoo) => (
                                <div className={empList.formgroup} key ={infoo. _id}>
                                <div className={empList.userdata}><img src={pic9} alt="P" /></div>
                                <div className={empList.groupdata}>
                                    <p id="_name">{infoo. name}</p>
                                </div>
                                <div className={empList.groupdata}>
                                    <p id="_contact">{infoo. email}</p>
                                </div>
    
                                <div className={empList.groupdata}>
                                    <p id="_role">{infoo. description}</p>
                                </div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        ))}
                    
                    </div>
                </div>

            </body>





        </div>
    );
}

export default EmployeeList;      