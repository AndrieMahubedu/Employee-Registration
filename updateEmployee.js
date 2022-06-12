import pic2 from './pictures/pic2.jpg'
import { Link, useNavigate } from 'react-router-dom';
import addEmp from'./update.module.css';
import { useState } from 'react';

function UpdateEmployee(){
    const navigate = useNavigate();
    const [UserUpdate, setUserUpdate] = useState({
        name:'',
        email:'',
        description:''
    })
     const handleChanges = (e) =>{
        const {name, value} = e.target;
        setUserUpdate(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    async function  updateEmployee (){
        const axios = require('axios').default;
        const userlog = await axios.post('http://localhost:3000/updateEmployee',UserUpdate);
        console.log(userlog)
        if(userlog.data.results === true){
            alert('Done')
            navigate('/employeelist')
        }
        else{
            alert(userlog.data.message)
        }
        
    }
    return(
        <div>
            <body>
            <div className={addEmp.wrapper}/>
        <div className={addEmp.header}>
        
        <Link  to="/welcome">Logout</Link>
        <h1 className={addEmp.h1} >Update Employee</h1>
    </div>
    <div className={addEmp.flexcontainer}>
              <div class="prof" id="prof">
              <div className={addEmp.userdata}><img src={pic2} alt="P"/></div>
              <div class="edit" id="edit">
                       <input type="file" id="file"/>
                    </div>
                    <div className={addEmp.name2} id="name2">
                        <p>Name:</p>
                      </div>

                      <div className={addEmp.name3}>
            
                        <input className={addEmp.input} type="text" id="Name" name="name" placeholder="Name" class="control-form" 
                value={UserUpdate.email} onChange={handleChanges}/>
                  
                    </div>
                    <div className={addEmp.name4}  id="name4">
                        <p>Email: </p>
                      </div>
                    <div className={addEmp.name5}>
            
                        <input className={addEmp.input} type="text" id="Email" name="email" placeholder="info@example.com"class="control-form" 
                value={UserUpdate.email} onChange={handleChanges}/>
                  
                    </div>

                    <div className={addEmp.name6} id="name6">
                        <p>Description:</p>
                      </div>
                    <div className={addEmp.name7}>
            
                        <textarea className={addEmp.textarea} cols="8" rows="2"></textarea>
                      
                    </div>
                
                    <button  type="button" onClick={updateEmployee}>Done</button>
               </div>
</div>

</body>

</div>
    );
}

export default UpdateEmployee; 