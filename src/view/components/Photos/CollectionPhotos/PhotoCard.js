import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PhotoImage from "./Partial/PhotoImage";
import PhotoTags from "./Partial/PhotoTags";
import _ from "lodash";

function PhotoCard({ item }) {
  return (
    <Container>
      <PhotoImage preview_photos={item.preview_photos} />
      <Title className="e_">{item.title}</Title>
      <Info>
        {item.total_photos} photos &middot; Curated by {item.user?.name}
      </Info>
      {!_.isEmpty(item?.tags) && <PhotoTags tags={item.tags} />}
    </Container>
  );
}

PhotoCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    preview_photos: PropTypes.array,
    total_photos: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string
    }),
    tags: PropTypes.array
  })
};

const Container = styled.div``;

const Title = styled.h3`
  font-size: 18px;
  line-height: 1.34;
  font-weight: 600;
  color: #111;
  margin-bottom: 8px;
`;
const Info = styled.span`
  font-size: 14px;
  color: #767676;
  margin-bottom: 16px;
  display: block;
`;

export default PhotoCard;
