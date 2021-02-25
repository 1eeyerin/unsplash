import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import {recomposePhotos} from "../../../lib/Common";

function PhotoList({data}) {

    const photosGroup = recomposePhotos(data);

    return (
        <Container>
            {
                photosGroup.map((group, idx) => (
                    <PhotoGroup key={idx}>
                        {
                            group.map((item, i) => (
                                <Col key={i}>
                                    <PhotoCard {...item} />
                                </Col>
                            ))
                        }
                    </PhotoGroup>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin: 0 -12px;
`
const PhotoGroup = styled.div`
  width: 33.3333%;
  padding: 12px;
  box-sizing: border-box;
`
const Col = styled.div`
`

export default PhotoList;