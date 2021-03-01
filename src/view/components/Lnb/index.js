import React from "react";
import styled from "styled-components";
import FixMenu from "./FixMenu";
import HorizontalSlideMenu from "./HorizontalSlideMenu";
import {font} from "../../../styled/Font.Styled";

function  Lnb({topicNav}) {

    return (
        <Container>
            <FixMenu/>
            <HorizontalSlideMenu topicNav={topicNav}/>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 62px;
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