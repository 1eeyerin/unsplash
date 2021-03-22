import React from "react";
import styled from "styled-components";
import SearchBox from "../../Search/SearchBox";
import { font } from "../../../../styled/Font";
import { media } from "../../../../styled/Responsive";
import { Link } from "react-router-dom";

function Visual() {
  return (
    <Container>
      <Contents>
        <Title>Unsplash</Title>
        <Description>
          The internet’s source of <Link to={"/"}>freely-usable images.</Link>
          <br />
          Powered by creators everywhere.
        </Description>
        <SearchBox shape={"square"} />
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  height: 560px;
  background: url("https://images.unsplash.com/photo-1606925207923-c580f25966b0?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=2&auto=format%2Ccompress&fit=crop&w=1399&h=594")
    no-repeat center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  padding: 0 12px;
  box-sizing: border-box;

  ${media.lessThan("sm")`
    height: 312px;
  `};

  ${media.lessThan("xs")`
    height: 208px;
  `};

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

  .SearchBox {
    ${media.lessThan("sm")`
      display: none;
    `};
  }
`;

const Contents = styled.div`
  width: 66.66667%;
  position: relative;
  z-index: 2;
  color: #fff;

  ${media.lessThan("sm")`
    width: 100%;
  `};
`;
const Title = styled.strong`
  font-size: 46px;
  line-height: 1.2;
  font-weight: 700;
  font-family: ${font.en};

  ${media.lessThan("sm")`
    font-size: 24px;
  `};
`;
const Description = styled.p`
  font-family: ${font.en};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  margin: 15px 0 25px;

  ${media.lessThan("sm")`
    font-size: 15px;
    margin-bottom: 15px;
  `};

  a {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default Visual;
