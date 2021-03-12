import React from "react";
import styled from "styled-components";
import FixMenu from "./FixMenu";
import HorizontalSlideMenu from "./HorizontalSlideMenu";
import {font} from "../../../styled/Font.Styled";
import {useLocation} from "react-router-dom";

function  Lnb({topicNav}) {

    const location = useLocation();

    return (
        <Container>
            <FixMenu location={location}/>
            <HorizontalSlideMenu topicNav={topicNav} location={location}/>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #fff;
  display: flex;
  flex: 1;
  box-shadow: 0 4px 12px rgb(0 0 0 / 8%), 0 0 1px rgb(1 0 0 / 10%);
  font-family: ${font.en};
`

export default Lnb;