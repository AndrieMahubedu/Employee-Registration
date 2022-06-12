import { useState } from 'react';
import pic1 from './pictures/pic1.png'
import { Link, useNavigate } from 'react-router-dom';
import './App.css';



function Register(){
    const navigate = useNavigate();
    const [UserRegister, setUserRegister] = useState({
        email:'',
        password:'',
        vPassword:''
    })
    const handleChanges = (e) =>{
        const {name, value} = e.target;
        setUserRegister(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function  register (){
        const axios = require('axios').default;
        if(UserRegister.password !== UserRegister.vPassword ){
            return alert('Password does not match!!')
        }
        const userlog = await axios.post('http://localhost:3000/register',UserRegister);
        console.log(userlog)
        
            
            navigate('/')
       
       
    }
    return(
        <div>

            
<body>
<section>
    <div class="container" id="con1">
        <div class="left" id="left">
            <img src={pic1} width="100" height="100" alt="PP"/>
            
            <div class="left" id="left1">
               
             <p>First this study adopts a<br/> 
                holistic approach and<br/>
                anylyses user acceptance of<br/>
                XR-technology from multiple<br/>
                discipline, theories, and <br/>
                perspective.
                <br/>
                <br/>
                <br/>
                For more info, Contact us at:<br/>
                <label>xr@technologies.com</label>
               
            </p>
        
            </div>
        
        
        </div>
  
    </div>
</section>


<section>
    <div id="con2">
        <div id="right">
            <h1>Register</h1>
          
            <div class="form-group">
                <h1>Email:</h1>
                <input type="text" name="email" placeholder="email@example.com" class="control-form" 
                value={UserRegister.email} onChange={handleChanges}/>
            </div>

            <div class="form-group">
                <h1>Password:</h1>
                <input type="password" name="password" placeholder="password" class="control-form" 
                value={UserRegister.password}  onChange={handleChanges}/>
                </div>
            <div class="form-group">
                <h1>Verify Password:</h1>
                
            
                <input type="password" name="vPassword" placeholder="Verify Password" class="control-form" 
                value={UserRegister.vPassword}  onChange={handleChanges}/>
                </div>
       

     <div id="right5">
            
        <h1>Already have an account? < Link to="/">Login</Link></h1>
        
    </div>

    <div id="right6">
    <button  type="button" onClick={register}>Register</button>
        
        
        
     
    </div>
 </div>

</div>
</section>
 
    
 
</body>
        </div>
    );
}

export default Register;