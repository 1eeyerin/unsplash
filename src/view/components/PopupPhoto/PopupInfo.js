import React, {useState} from "react";
import styled from "styled-components";
import {IconPhotoFullSize} from "../../../icons";

function PopupInfo(popupPhoto) {

    const [imageUrl, setImageUrl] = useState(popupPhoto?.urls.small);
    const [imageSizeFull, setImageSizeFull] = useState(false);

    const onClick = () => {
        imageSizeFull ? setImageSizeFull(false) : setImageSizeFull(true);
        imageSizeFull ? setImageUrl(popupPhoto?.urls.small) : setImageUrl(popupPhoto?.urls.full);
    }

    return (
        <Container>
            <ImageArea>
                <ImageButton onClick={onClick}>
                    <IconPhotoFullSize/>
                    <Image>
                        <img src={imageUrl} alt=""/>
                    </Image>
                </ImageButton>
            </ImageArea>
        </Container>
    )
}

const Container = styled.div`

`
const ImageArea = styled.div`
  text-align: center;
`
const ImageButton = styled.button`
  position: relative;
  outline: 0;
  background: 0;
  border: 0;
  font-size: 0;
  vertical-align: top;
  padding: 0;
  cursor: zoom-in;

  &:hover svg {
    opacity: 1;
  }

  svg {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1;
    display: block;
    fill: #fff;
    width: 24px;
    height: 24px;
    opacity: 0;
    transition-property: opacity;
    transition-duration: .3s;
  }
`
const Image = styled.div`
  font-size: 0;

  img {
    max-width: 100%;
  }
`

export default PopupInfo;