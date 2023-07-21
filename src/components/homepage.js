import React from "react";

function homepage(){
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="images/Overwatch_2_logo.svg.png" style={{ paddingTop: '50px', paddingLeft: '90px', height: '250px' }} />
        <h1 style={{ color: 'white' }}>Overwatch 2 hero helper</h1>
        </div>
    );
}

export default homepage;