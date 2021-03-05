import React from "react";
import styled from "styled-components";
import {createPortal} from "react-dom";
import PopupPhoto from "./index";
import {photosActions} from "../../../redux/ActionCreators";

function LayerPopup(){

    const onClose = () => {
        photosActions.updateState({
            popupPhoto: {
                show: false,
            }
        })
    }

    return createPortal(
        <Container onClick={onClose}>
            <PopupPhoto/>
        </Container>,
        document.getElementById('popup')
    )
}

const Container = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
`

export default LayerPopup;