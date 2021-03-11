import React from "react";
import styled from "styled-components";
import PopupPhoto from "../components/PopupPhoto";

function Photos({match}){
    const id = match.params.id;
    
    return(
        <Container>
            {/*<PopupPhoto/>*/}
        </Container>
    )
}

const Container = styled.div`

`

export default Photos;