import React from "react";
import Menu from "./Menu";
 const About = () => {
    return (
        <div className="about">
            <Menu/>
            <h1 style={{textAlign:"center",fontFamily:"Stencil Regular"}}>
                Developed By
            </h1>
           <div className="aboutUS" align = "center" style={{display:"inline", }}>
              <div className = "card h-50" align="center" style={{width:"250px", alignContent:"center"}}>
                    <div className = "card-header bg-dark text-white">Garvit Rajput<br/>1900820100046</div>
                </div>
                <div className = "card h-50" style={{width:"250px", alignContent:"center", textAlign:"center"}}>
                    <div className = "card-header bg-white text-dark">Divyanshu Gahlot<br/>1900820100042</div>
                </div>
                <div className = "card h-50" style={{width:"250px",alignContent:"center",textAlign:"center"}}>
                    <div className = "card-header bg-dark text-white">Bhupendra Singh Gola<br/>1900820100032</div>
                </div>
                <div className = "card h-50" style={{width:"250px",alignContent:"center",textAlign:"center"}}>
                    <div className = "card-header bg-white text-dark">Harsh Chaudhary<br/>1900820100049</div>
                </div>
                <div className = "card h-50" style={{width:"250px",alignContent:"center",textAlign:"center"}}>
                    <div className = "card-header bg-dark text-white">Abhishek Rana<br/>1900820100008</div>
                </div>
                <h1 align="center">Year/Semester: 3/5<br/>Bachelor of Technology<br/>Department of Computer Science and Engineering<br/>Moradabad Institute of Technology</h1>
           </div>
         </div>
    )
}
export default About