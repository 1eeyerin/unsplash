import React from "react";
import styled from "styled-components";

function RelatedTags({Title}) {

    return (
        <Container>
            <Title>Related tags</Title>
        </Container>
    )
}

const Container = styled.div`
  padding: 0 12px;
`

export default RelatedTags;