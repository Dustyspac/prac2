import React from "react";
import styled from 'styled-components';
// import { NavBar } from "../styles/componentStyles";


const Header = () => {
    return (
        <>
        <NavBar>
            <Title>My Todo List</Title>
            <Title2>React</Title2>
        </NavBar>
        </>
    );
};

const NavBar = styled.div`
    display: flex;
    width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    border: 1px solid gray;
    border: none;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;

const Title = styled.p`
    font-size:24px;
    margin-left: 20px;
`
const Title2 = styled.p`
    font-size:24px;
    margin-right: 20px;
`



export default Header;