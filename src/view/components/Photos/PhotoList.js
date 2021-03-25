import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import { recomposePhotos } from "../../../lib/Common";
import { photosActions } from "../../../redux/ActionCreators";
import PropTypes from "prop-types";
import { breakPoint, media } from "../../../styled/Responsive";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { navigate } from "../../../lib/History";
import _ from "lodash";
import PhotoListSkeleton from "../Loader/PhotoListSkeleton";

function PhotoList({ data }) {
  const { width } = useWindowDimensions();
  const photosGroup = recomposePhotos(data, width);

  const onClick = id => {
    if (breakPoint.SM >= width) {
      navigate(`/photos/${id}`);
    } else {
      photosActions.getPopupPhoto(id);
      window.history.pushState({ id }, null, `/photos/${id}`);
    }
  };

  if (_.isEmpty(data)) return <PhotoListSkeleton />;

  return (
    <Container>
      <Layout>
        {photosGroup.map((group, idx) => (
          <PhotoGroup key={idx}>
            {group.map((item, i) => (
              <Col key={i} className="PhotoCard">
                <PhotoCard {...item} onClick={() => onClick(item.id)} />
              </Col>
            ))}
          </PhotoGroup>
        ))}
      </Layout>
    </Container>
  );
}

PhotoList.propTypes = {
  data: PropTypes.array,
  photosGroup: PropTypes.object,
  group: PropTypes.shape({
    item: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

const Container = styled.div`
  overflow: hidden;
`;
const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -24px -12px;

  ${media.lessThan("xs")`
    margin: -12px -5px;
  `};
`;
const PhotoGroup = styled.div`
  width: 33.3333%;
  padding: 12px;
  box-sizing: border-box;

  ${media.lessThan("md")`
    width: 50%;
  `};

  ${media.lessThan("xs")`
    padding: 5px;
  `};
`;
const Col = styled.div``;

export default PhotoList;
