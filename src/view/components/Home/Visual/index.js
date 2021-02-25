import React from "react";
import styled from "styled-components";
import SearchBox from "../../SearchBox";
import {font} from "../../../../styled/Font.Styled";

function Visual() {

    return (
        <Container>
            <Contents>
                <Title>Unsplash</Title>
                <Description>
                    The internet’s source of <a href="#">freely-usable images.</a><br/>
                    Powered by creators everywhere.
                </Description>
                <SearchBox shape={"square"} />
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  height: 560px;
  background: url("https://images.unsplash.com/photo-1606925207923-c580f25966b0?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=2&auto=format%2Ccompress&fit=crop&w=1399&h=594") no-repeat center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`

const Contents = styled.div`
  max-width: 870px;
  width: 100%;
  position: relative;
  z-index: 2;
  color: #fff;
`
const Title = styled.strong`
  font-size: 46px;
  line-height: 1.2;
  font-weight: 700;
  font-family: ${font.en};
`
const Description = styled.p`
  font-family: ${font.en};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  margin: 15px 0 25px;
  a {
    color: rgba(255,255,255,0.8)
  }
`

export default Visual;