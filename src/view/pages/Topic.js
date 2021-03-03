import React from "react";
import styled from "styled-components";
import TopicPhotoListContainer from "../containers/TopicPhotoListContainer";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import {font} from "../../styled/Font.Styled";

function Topic(props) {
    const query = props.match.params.query;
    return (
        <Container>
            <ContentContainer>
                <Title>{query}</Title>
            </ContentContainer>
            <TopicPhotoListContainer {...props} />
        </Container>
    )
}

const Container = styled.div`

`
const Title = styled.h1`
  padding-top: 60px;
  padding-bottom: 72px;
  font-family: ${font.en};
  font-size: 46px;
  line-height: 1.2;
  font-weight: 700;
`

export default Topic;