import pp from './pictures/pp.jpg'
import { Link } from 'react-router-dom';

import Prof from './profile.module.css';


function Profile(){
    return(
      <div className="App">

            

<body>
  
<div className={Prof.wrapper}/>
        <div className={Prof.header}>
            
        < Link to="/addEmployement">Add Employee</Link>
            < Link to="/employeelist">View Employee</Link>
            
            <Link  to="/">Logout</Link>
        <h1 className={Prof.h1} >Profile</h1>
        </div>
        <div className={Prof.flexcontainer}>
              <div class="prof" id="prof">
                    
              <div className={Prof.userdata}> <img src={pp}  alt="PP"/>
                    <div class="edit" id="edit">
                      
                      <Link to="/updateProfile">Edit </Link>
                       </div>

                    <div className={Prof.name} id="name">
                      <p>Jabu Jabu</p>
                    </div>

                    <div className={Prof.bio} id="bio">
               <p>
                Investigator of the sense of presence <br/>
                during a virtual walkthrough of a <br/>
                tourismdestination and how presence <br/>
                influences post-VR attitude change <br/>
                toward the destination
               </p>
                     
                 
                     </div>

                     <div className={Prof.contact} id="contact">
                      
                             <p> Contact info:<br/>Email: 
                                <label> xr@technologies.com</label>
                               
                            </p>
                        
                            </div>
               </div>
    </div>
    </div>
  </body>

</div>
);
}

export default Profile;