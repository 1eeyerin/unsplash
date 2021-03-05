import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import PhotoList from "../Photos/PhotoList";
import PopupInfo from "./PopupInfo";

function PopupPhoto() {

    const {popupPhoto} = useSelector(state => state.photos);
    return (
        <Container>
            <Contents onClick={(e) => e.stopPropagation()}>
                <PopupInfo {...popupPhoto}/>
                <PhotoList data={popupPhoto?.related_photos}/>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 40px 0;
`
const Contents = styled.div`
  background: #ffffff;
`

export default PopupPhoto;