import React from "react";
import { useSelector } from "react-redux";
import { GlobalStyle } from "../styled/Reset";
import styled from "styled-components";
import Routes from "./routes/Routes";
import HeaderContainer from "./containers/HeaderContainer";
import PopupPhotoContainer from "./containers/PopupPhotoContainer";
import PropTypes from "prop-types";

function App() {
  const { popupPhoto } = useSelector(state => state.photos);

  return (
    <Container>
      <GlobalStyle />
      <HeaderContainer />
      <Routes />
      {popupPhoto.show && <PopupPhotoContainer />}
    </Container>
  );
}

App.propTypes = {
  popupPhoto: PropTypes.shape({
    show: PropTypes.bool
  })
};

const Container = styled.div``;

export default App;
