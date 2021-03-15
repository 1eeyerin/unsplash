import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconInfo, IconPhotoCardAdd, IconPhotoCardLike, IconPhotoFullSize, IconShare } from "../../../icons";
import { Btn, Buttons } from "../../../styled/Button.Styled";
import { UserBio, UserImage, UserInfo } from "../../../styled/Common.Styled";

function DetailInfo({ urls, user }) {
    const [imageUrl, setImageUrl] = useState(urls?.small);
    const [imageSizeFull, setImageSizeFull] = useState(false);

    useEffect(() => {
        setImageUrl(urls?.small);
    }, [urls]);

    const onClick = () => {
        imageSizeFull ? setImageSizeFull(false) : setImageSizeFull(true);
        imageSizeFull ? setImageUrl(urls?.small) : setImageUrl(urls?.full);
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
                        <img src={imageUrl} alt="" />
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
