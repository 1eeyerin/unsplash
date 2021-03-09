import React from "react";
import styled from "styled-components";
import {IconPhotoCardAdd, IconPhotoCardDownload, IconPhotoCardLike} from "../../../icons";

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
                    <Button><IconPhotoCardLike/></Button>
                    <Button><IconPhotoCardAdd/></Button>
                </Buttons>
            </Info>

            <Info>
                <UserAvatar>
                    <UserInfo>
                        <UserImage><img src={profile_image.small} alt=""/></UserImage>
                        <p><span className="e_">{name}</span></p>
                    </UserInfo>
                </UserAvatar>
                <Button as="a"><IconPhotoCardDownload/></Button>
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
const Sponsor = styled.div`
  flex: 1;
  opacity: .9;
  font-weight: 500;
  color: #fff;
  font-size: 11px;
  letter-spacing: .02em;
  text-shadow: 0 1px 8px rgb(0 0 0 / 10%);
`
const Buttons = styled.div`
`
const Button = styled.button`
  height: 32px;
  padding: 0 11px;
  font-size: 14px;
  line-height: 30px;
  color: #767676;
  background-color: hsla(0, 0%, 100%, .9);
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  outline: 0;

  svg {
    position: relative;
    top: -1px;
    width: 15px;
    fill: #767676;
  }

  & + button {
    margin-left: 8px;
  }
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
const UserInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  p {
    color: #fff;
    display: flex;
    flex: 1;
  }
`
const UserImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, .1);
  margin-right: 8px;
`
export default CardInfo;