import React from "react";

function header(){
    return(
    //Navbar
    <div class="container-fluid" style="height: 80px;">
        <div class="row" >
    
            <nav class="navbar" style="background-color:#2f77be; border:none ; height:80px;">
                <a class="navbar-logo" href="index.html" alt="Logo">
                    <img src="images/logo.png" style="background-color: black; object-fit: contain; height:80px"></img>
                </a>
                <span style="padding-right: 65%; color:white; ">Overwatch 2 hero helper</span>
                <input type="text" placeholder="Search for a hero" style="width: 200px; font-size: 10px;"></input>
                <button type="submit">Search</button>
            </nav>
        </div>
    </div>


     );
}

export default header;