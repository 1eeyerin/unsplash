import React from "react";
import styled from "styled-components";
import Popup from "../components/Popup";
import { searchActions } from "../../redux/ActionCreators";
import { pxToRem } from "../../styled/Util";
import { font } from "../../styled/Font";
import PopupSearchControl from "../components/Popup/PopupSearchControl";

function PopupSearchControlContainer() {
  const onClose = () => {
    searchActions.updateState({
      popupControl: false
    });
  };
  return (
    <Popup onClose={onClose}>
      <Contents>
        <PopupSearchControl onClose={onClose} />
      </Contents>
    </Popup>
  );
}

const Contents = styled.div`
  max-width: ${pxToRem(1320)};
  margin: 0 auto;
  font-family: ${font.en};
  height: calc(100vh - 64px);
`;

export default PopupSearchControlContainer;
