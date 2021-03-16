import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  IconInfo,
  IconPhotoCardAdd,
  IconPhotoCardLike,
  IconPhotoFullSize,
  IconShare
} from "../../../icons";
import { Btn, Buttons } from "../../../styled/Button";
import { UserBio, UserImage, UserInfo } from "../../../styled/Common";
import { imagePreload } from "../../../lib/Common";

function DetailInfo({ urls, user }) {
  useLayoutEffect(() => {
    urls && imagePreload([urls?.small, urls?.regular]);
  }, [urls]);

  const [imageSizeFull, setImageSizeFull] = useState(false);

  const onClick = () => {
    setImageSizeFull(prevSize => !prevSize);
  };

  return (
    <Container>
      <ImageArea>
        <Info>
          <UserInfo>
            <UserImage>
              <img src={user?.profile_image.small} alt="" />
            </UserImage>
            <UserBio>
              <p className="userName">
                <span className="e_">{user?.name}</span>
              </p>
              <p className="userBio">@{user?.username}</p>
            </UserBio>
          </UserInfo>
          <Buttons>
            <StyledBtn>
              <IconPhotoCardLike />
            </StyledBtn>
            <StyledBtn>
              <IconPhotoCardAdd />
            </StyledBtn>
          </Buttons>
        </Info>

        <ImageButton onClick={onClick} sizeFull={imageSizeFull}>
          <Image>
            <IconPhotoFullSize />
            <img src={imageSizeFull ? urls?.regular : urls?.small} alt="" />
          </Image>
        </ImageButton>

        <Info className="right">
          <Buttons>
            <StyledBtn>
              <IconShare />
              <span>Share</span>
            </StyledBtn>
            <StyledBtn>
              <IconInfo />
              <span>Info</span>
            </StyledBtn>
          </Buttons>
        </Info>
      </ImageArea>
    </Container>
  );
}

DetailInfo.propTypes = {
  urls: PropTypes.shape({
    regular: PropTypes.string,
    small: PropTypes.string
  }),
  user: PropTypes.shape({
    profile_image: PropTypes.shape({
      small: PropTypes.string
    }),
    name: PropTypes.string,
    username: PropTypes.string
  })
};

const Container = styled.div``;
const Info = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 9px 12px;
  justify-content: flex-end;
  background: #fff;
`;
const StyledBtn = styled(Btn)`
  border-color: #d1d1d1;
`;
const ImageArea = styled.div`
  text-align: center;
`;
const ImageButton = styled.button`
  position: relative;
  outline: 0;
  background: 0;
  border: 0;
  font-size: 0;
  vertical-align: top;
  cursor: zoom-in;
  padding: ${props => (props.sizeFull ? "0" : "10px 16px")};

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
    transition-duration: 0.3s;
  }
`;
const Image = styled.div`
  font-size: 0;
  position: relative;
  z-index: 0;

  img {
    max-width: 100%;
  }
`;

export default DetailInfo;
