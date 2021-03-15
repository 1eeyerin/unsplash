import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import { recomposePhotos } from "../../../lib/Common";
import { photosActions } from "../../../redux/ActionCreators";

function PhotoList({ data }) {
  const photosGroup = recomposePhotos(data);

  const onClick = id => {
    photosActions.getPopupPhoto(id);
    window.history.pushState({ id }, null, `/photos/${id}`);
  };

  return (
    <Container>
      <Layout>
        {photosGroup.map((group, idx) => (
          <PhotoGroup key={idx}>
            {group.map((item, i) => (
              <Col key={i}>
                <PhotoCard {...item} onClick={() => onClick(item.id)} />
              </Col>
            ))}
          </PhotoGroup>
        ))}
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`;
const Layout = styled.div`
  display: flex;
  margin: -24px -12px;
`;
const PhotoGroup = styled.div`
  width: 33.3333%;
  padding: 12px;
  box-sizing: border-box;
`;
const Col = styled.div``;

//export default React.memo(PhotoList);
export default PhotoList;
