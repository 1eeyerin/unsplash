import React from "react";
import styled from "styled-components";
import CardInfo from "./CardInfo";

function PhotoCard({urls}){

    return(
        <Container>
            <img src={urls.regular} alt=""/>
            <CardInfo/>
        </Container>
    )
}

const Container = styled.div`
    padding: 12px 0;
`

export default PhotoCard;