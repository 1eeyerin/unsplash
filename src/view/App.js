import React from 'react'
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/Routes";
import HeaderContainer from "./containers/HeaderContainer";
import {useSelector} from "react-redux";
import LayerPopup from "./components/PopupPhoto/LayerPopup";

const App = () => {

    const {popupPhoto} = useSelector(state => state.photos);

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Routes/>
            {
                popupPhoto.show &&
                <LayerPopup/>
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default App;