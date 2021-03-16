import React, { useEffect } from "react";
import styled from "styled-components";
import { photosActions } from "../../redux/ActionCreators";
import DetailPhoto from "../components/DetailPhoto";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function DetailPhotoContainer({ match }) {
  const id = match.params.id;
  const { photo } = useSelector(state => state.photos);
  const getPhoto = () => {
    photosActions.getDetailPhoto(id);
  };

  useEffect(() => {
    getPhoto();
  }, [id]);

  return (
    <Container>
      <DetailPhoto data={photo} />
    </Container>
  );
}

DetailPhotoContainer.propTypes = {
  match: PropTypes.object,
  id: PropTypes.string,
  photo: PropTypes.object
};

const Container = styled.div``;

export default DetailPhotoContainer;
