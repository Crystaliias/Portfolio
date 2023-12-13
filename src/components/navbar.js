import React from "react";
 
const Navbar = () => {
    return (
        <div class="top">
            <div class='logo'>
                <h1>Julian's Portfolio</h1>
            </div>
            <div class="navbar">
                <p>
                    <a href='/'>Home</a> |
                    <a href='/TheMagicalGuardianExperience'> The Magical Guardian Experience</a> | 
                    <a href='/AngelicAnguish'> Angelic Anguish</a> | 
                    <a href='/TheInsuranceGame'> The Insurance Game</a>
                </p>
            </div>
        </div>
    );
};
 
export default Navbar;