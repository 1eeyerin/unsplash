import React from 'react';
import {useSelector} from "react-redux";
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/Routes";
import HeaderContainer from "./containers/HeaderContainer";
import PopupPhotoContainer from "./containers/PopupPhotoContainer";

function App() {

    const {popupPhoto} = useSelector(state => state.photos);

    return (
        <>
            <GlobalStyle/>
            <HeaderContainer/>
            <Routes/>
            {
                popupPhoto.show &&
                <PopupPhotoContainer/>
            }
        </>
    )
}

export default App;