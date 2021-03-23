import React from "react";
import { useSelector } from "react-redux";
import { GlobalStyle } from "../styled/Reset";
import styled from "styled-components";
import Routes from "./routes/Routes";
import HeaderContainer from "./containers/HeaderContainer";
import PopupPhotoContainer from "./containers/PopupPhotoContainer";
import PropTypes from "prop-types";
import PopupSearchControlContainer from "./containers/PopupSearchControlContainer";
import UseScrollToTop from "../hooks/useScrollToTop";

function App() {
  const {
    photos: { popupPhoto },
    search: { popupControl }
  } = useSelector(state => state);

  return (
    <Container>
      <GlobalStyle />
      <UseScrollToTop />
      <HeaderContainer />
      <Routes />
      {popupPhoto.show && <PopupPhotoContainer />}
      {popupControl && <PopupSearchControlContainer />}
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
