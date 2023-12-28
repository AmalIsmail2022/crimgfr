import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";


const Landing = () => {
    const [user, setUser] = useState("");
    const [admin, setAdmin] = useState("");

    const logOut = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser("");
    };
    useEffect(() => {
      if (localStorage.getItem("user") != null)
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);
    useEffect(() => {
      if (localStorage.getItem("admin") != null)
        setUser(JSON.parse(localStorage.getItem("admin")));
    }, []); 
  
    return (
      <div>
     
          <Link to={"/home"}>
            <div className="landing">
     
                <h1>
            
                    <span>EMPLOYEES</span>
          
     
                    <span> CRUD</span>
         
  
                    <span> SYSTEM</span>
   
                </h1>
    
            </div>
          </Link>
       
     
    
      </div>
    );
}

export default Landing;
