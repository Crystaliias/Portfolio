import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #cf9db0;
    height: 85px;
    display: flex;
    justify-content: center;
`;
 
export const NavLink = styled(Link)`
    font-size: 28px;
    color: #4d152b;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #ffe0ec;
    }
`;
 
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;