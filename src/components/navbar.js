import React from "react";
import { Nav, NavLink, NavMenu } from "./nav";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/TheMagicalGuardianExperience" activeStyle>
                        The Magical Guardian Experience
                    </NavLink>
                    <NavLink to="/AngelicAnguish" activeStyle>
                        Angelic Anguish
                    </NavLink>
                    <NavLink to="/TheInsuranceGame" activeStyle>
                        The Insurance Game
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;