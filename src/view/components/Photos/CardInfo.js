import React from "react";
import styled from "styled-components";
import {IconPhotoCardAdd, IconPhotoCardDownload, IconPhotoCardLike} from "../../../icons";
import {Btn, Buttons} from "../Button/Button.Styled";
import {UserBio, UserImage, UserInfo} from "../../../styled/Common.Styled";

function CardInfo({name, profile_image, sponsorship}) {

    return (
        <Container>
            <Info>
                <Sponsor>
                    {
                        sponsorship && "Sponsored"
                    }
                </Sponsor>
                <Buttons>
                    <Btn><IconPhotoCardLike/></Btn>
                    <Btn><IconPhotoCardAdd/></Btn>
                </Buttons>
            </Info>

            <Info>
                <UserAvatar>
                    <StyledUserInfo>
                        <UserImage><img src={profile_image.small} alt=""/></UserImage>
                        <UserBio>
                            <p className="userName"><span className="e_">{name}</span></p>
                        </UserBio>
                    </StyledUserInfo>
                </UserAvatar>
                <Btn as="a"><IconPhotoCardDownload/></Btn>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`
const StyledUserInfo = styled(UserInfo)`
  .userName {
    color: #fff;
    font-weight: 400;
  }
`
const Sponsor = styled.div`
  flex: 1;
  opacity: .9;
  font-weight: 500;
  color: #fff;
  font-size: 11px;
  letter-spacing: .02em;
  text-shadow: 0 1px 8px rgb(0 0 0 / 10%);
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const UserAvatar = styled.div`
  display: flex;
  flex: 1;
`
export default CardInfo;