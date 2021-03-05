import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

function PhotoItemSkeleton(){
    
    return(
        <Container>
            <Thumb/>
        </Container>
    )
}

const Container = styled.div`
    
`
const Thumb = styled(Skeleton)`
    height: 200px; 
`

export default PhotoItemSkeleton;