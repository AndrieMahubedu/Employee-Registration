import pp from './pictures/pp.jpg'
import { Link } from 'react-router-dom';

import addEmp from'./update.module.css';

function UpdateProfile(){
    return(
        <div>


<body>
<div className={addEmp.wrapper}/>
        <div className={addEmp.header}>
        
        <Link  to="/">Logout</Link>
        <h1 className={addEmp.h1} >Update Profile</h1>
    </div>
    <div className={addEmp.flexcontainer}>
              <div class="prof" id="prof">
              <div className={addEmp.userdata}><img src={pp} alt="P"/></div>
              
              <div class="edit" id="edit">
                       <input type="file" id="file"/>
                    </div>

                    
                    <div className={addEmp.name2} id="name2">
                        <p>Name:</p>
                      </div>

                      <div className={addEmp.name3}>
            
                        <input className={addEmp.input} type="text" id="Name" name="name" placeholder="Name"/>
                  
                    </div>
                    <div className={addEmp.name4}  id="name4">
                        <p>Email:</p>
                      </div>
                    <div className={addEmp.name5}>
            
                        <input className={addEmp.input} type="text" id="Email" name="email" placeholder="info@example.com"/>
                  
                    </div>

                    <div className={addEmp.name6} id="name6">
                        <p>Description:</p>
                      </div>
                    <div className={addEmp.name7}>
            
                        <textarea className={addEmp.textarea} cols="8" rows="2"></textarea>
                      
                    </div>
                
                    <button  type="button">Done</button>
                     
               </div>
    </div>
  
  </body>

        </div>
    );
}

export default UpdateProfile; 