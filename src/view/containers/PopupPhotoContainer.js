import React from "react";
import { useSelector } from "react-redux";
import { photosActions } from "../../redux/ActionCreators";
import DetailPhoto from "../components/DetailPhoto";
import Popup from "../components/Popup";
import PropTypes from "prop-types";

function PopupPhotoContainer() {
  const { popupPhoto } = useSelector(state => state.photos);

  const onClose = () => {
    photosActions.updateState({
      popupPhoto: {
        show: false
      }
    });
    window.history.pushState({}, null, "/");
  };

  return (
    <Popup onClose={onClose}>
      <DetailPhoto data={popupPhoto} />
    </Popup>
  );
}

PopupPhotoContainer.propTypes = {
  popupPhoto: PropTypes.object
};

export default PopupPhotoContainer;
