import React from "react";
import {FaBars} from "react-icons/fa";


const Sidebar = () => {
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:"images/logo.png"
        },
        {
            path:"/aboutus",
            name:"About Us",
            icon:"images/AboutUS.png"
        },
        {
            path:"/tierlist",
            name:"Tier List",
            icon:"images/list.png"
        },
        {
            path:"/ourcoaches",
            name:"Our Coaches",
            icon:"images/coaches.png"
            
        },
        {
            path:"/booknow",
            name:"Book Now",
            icon:"images/BookNow.png"
        },
    ]

    return (
        <div className="container">
              <div className="siderbar">
                <div className="top_section">
                <h1 className="logo">Logo</h1>
                    <div className="bars">
                        <FaBars/>
                    </div>
                </div>
              </div>
        </div>
    );
};

export default Sidebar;