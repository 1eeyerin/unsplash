import React from 'react'
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import Lnb from "./components/Lnb";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Lnb/>
            <Routes/>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default App;