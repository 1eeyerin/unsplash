import React from "react";
import styled from "styled-components";
import CardInfo from "./CardInfo";

function PhotoCard({urls, onClick}) {

    return (
        <Container onClick={onClick}>
            <img src={urls.regular} alt=""/>
            <CardInfo/>
        </Container>
    )
}

const Container = styled.div`
  padding: 12px 0;
  cursor: zoom-in;
`

export default PhotoCard;