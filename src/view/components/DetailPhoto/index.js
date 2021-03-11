import React from "react";
import styled from "styled-components";
import DetailInfo from "./DetailInfo";
import RelatedPhotos from "./RelatedPhotos";
import {font} from "../../../styled/Font.Styled";
import RelatedCollections from "./RelatedCollections";
import RelatedTags from "./RelatedTags";

function DetailPhoto({data}) {
    return (
        <Container>
            <DetailInfo {...data}/>
            <RelatedPhotos data={data?.related_photos} Title={Title}/>
            <RelatedCollections Title={Title}/>
            <RelatedTags Title={Title}/>
        </Container>
    )
}
const Container = styled.div`
`
const Title = styled.div`
  padding-top: 60px;
  padding-bottom: 16px;
  font-size: 18px;
  font-family: ${font.en};
`

export default DetailPhoto;