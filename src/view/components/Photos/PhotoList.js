import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import {recomposePhotos} from "../../../lib/Common";
import {photosActions} from "../../../redux/ActionCreators";

function PhotoList({data}) {

    const photosGroup = recomposePhotos(data);

    const onClick = (id) => {
        photosActions.getPhotoById(id);
        window.history.pushState({id}, null, `/photos/${id}`);
    }

    return (
        <Container>
            {
                photosGroup.map((group, idx) => (
                    <PhotoGroup key={idx}>
                        {
                            group.map((item, i) => (
                                <Col key={i}>
                                    <PhotoCard {...item} onClick={() => onClick(item.id)}/>
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
  margin-top: 24px;
`
const PhotoGroup = styled.div`
  width: 33.3333%;
  padding: 12px;
  box-sizing: border-box;
`
const Col = styled.div`
`

//export default React.memo(PhotoList);
export default PhotoList;