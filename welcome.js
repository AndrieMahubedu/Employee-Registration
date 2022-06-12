import { useState } from 'react';
import pic1 from './pictures/pic1.png'
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [UserLogin, setUserLogin] = useState({
        email:'',
        password:''
    })
    const handleChanges = (e) =>{
        const {name, value} = e.target;
        setUserLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function  login (){
        const axios = require('axios').default;
        const userlog = await axios.post('http://localhost:3000/login',UserLogin);
        console.log(userlog)
        if(userlog.data.results === true){
            alert('success')
            navigate('/profile')
        }
        else{
            alert(userlog.data.message)
        }
        
    }


  return (
    <div className="App">
      <body>
        <section>
        <div class="container" id="con1">
        <div class="left" id="left">
        <img src={pic1} width="100" height="100" alt="PP"/>
            
            <div class="left" id="left1">
               
             <p>This study contributes<br/> 
                in several ways to the<br/>
                body of knowledge on <br/>
                technology acceptance.
            </p>
        
            </div>
        
        
        </div>
  
    </div>
</section>


<section>
    <div id="con2">

        <div id="right">

            <h1>Log In</h1>
            <div class="form-group">
                <h1>Email:</h1>
                <input type="text" name="email" placeholder="email@example.com" class="control-form" 
                value={UserLogin.email} onChange={handleChanges}/>
            </div>

            <div class="form-group">
                <h1>Password:</h1>
                <input type="password" name="password" placeholder="password" class="control-form" 
                value={UserLogin.password}  onChange={handleChanges}/>
            </div>
        
      
     <div id="right5">
            
        <h1>Already have an account? <Link to="/Register">Register</Link></h1>
    </div>

    <div id="right6">
        <button  type="button" onClick={login}>Login</button>
        
     
    </div>
 </div>

</div>
</section>
 
    
 
</body>
    </div>
  );
}

export default Login;
