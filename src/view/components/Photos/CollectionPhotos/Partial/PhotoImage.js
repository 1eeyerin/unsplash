import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function PhotoImage({ preview_photos }) {
  return (
    <Photo>
      <Box>
        <Image solo>
          <div>{preview_photos?.[0] && <img src={preview_photos[0]?.urls?.regular} alt="" />}</div>
        </Image>
        <Image>
          <Img>{preview_photos?.[1] && <img src={preview_photos[1]?.urls?.small} alt="" />}</Img>
          <Img>{preview_photos?.[2] && <img src={preview_photos[2]?.urls?.small} alt="" />}</Img>
        </Image>
      </Box>
    </Photo>
  );
}

PhotoImage.propTypes = {
  preview_photos: PropTypes.array,
  urls: PropTypes.shape({
    regular: PropTypes.string,
    small: PropTypes.string
  })
};

const Photo = styled.div`
  height: 0;
  padding-bottom: 70%;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  margin-bottom: 16px;
`;
const Box = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > div:nth-child(1) {
    width: 70%;
    position: relative;
  }

  > div:nth-child(2) {
    width: 30%;
    margin-left: 2px;
  }

  img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
`;
const Image = styled.div`
  > div {
    background: #f5f5f5;

    ${props =>
      props.solo &&
      `
      height:100%;
    `}
  }
`;
const Img = styled.div`
  height: 50%;
  overflow: hidden;
  position: relative;

  + div {
    margin-top: 2px;
  }
`;

export default PhotoImage;
