import React from "react";
import styled from "styled-components";

function PhotoCard({urls}){
    
    return(
        <Container>
            <img src={urls.regular} alt=""/>
        </Container>
    )
}

const Container = styled.div`
    padding: 12px 0;
`

export default PhotoCard;