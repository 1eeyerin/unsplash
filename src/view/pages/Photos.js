import React from "react";
import styled from "styled-components";
import DetailPhotoContainer from "../containers/DetailPhotoContainer";

function Photos(props){
    return(
        <Container>
            <DetailPhotoContainer {...props} />
        </Container>
    )
}

const Container = styled.div`

`

export default Photos;