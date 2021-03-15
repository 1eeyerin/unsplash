import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardInfo from "./CardInfo";
import { useOnViewport } from "../../../hooks/useOnViewport";

function PhotoCard({ urls, onClick, user, sponsorship, width, height, color }) {
  const ratioHeight = (height / width) * 100;
  const [loaded, setLoaded] = useState(false);
  const [imageRef, inView] = useOnViewport();

  useEffect(() => {
    if (inView) setLoaded(true);
    return () => setLoaded(false);
  }, [inView]);

  return (
    <Container onClick={onClick}>
      <Contents
        style={{
          paddingBottom: `${ratioHeight}%`,
          backgroundColor: color
        }}
      >
        <Image className="card-image" ref={imageRef}>
          {loaded && <img src={urls.regular} alt="" />}
        </Image>
        <CardInfo {...user} sponsorship={sponsorship} />
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px 0;
  cursor: zoom-in;

  &:hover .card-image:before {
    opacity: 1;
  }
`;
const Contents = styled.div`
  position: relative;
  padding-bottom: 50%;
`;
const Image = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.34) 0,
      rgba(0, 0, 0, 0.338) 3.5%,
      rgba(0, 0, 0, 0.324) 7%,
      rgba(0, 0, 0, 0.306) 10.35%,
      rgba(0, 0, 0, 0.285) 13.85%,
      rgba(0, 0, 0, 0.262) 17.35%,
      rgba(0, 0, 0, 0.237) 20.85%,
      rgba(0, 0, 0, 0.213) 24.35%,
      rgba(0, 0, 0, 0.188) 27.85%,
      rgba(0, 0, 0, 0.165) 31.35%,
      rgba(0, 0, 0, 0.144) 34.85%,
      rgba(0, 0, 0, 0.126) 38.35%,
      rgba(0, 0, 0, 0.112) 41.85%,
      rgba(0, 0, 0, 0.103) 45.35%,
      rgba(0, 0, 0, 0.1) 48.85%,
      rgba(0, 0, 0, 0.103) 52.35%,
      rgba(0, 0, 0, 0.112) 55.85%,
      rgba(0, 0, 0, 0.126) 59.35%,
      rgba(0, 0, 0, 0.144) 62.85%,
      rgba(0, 0, 0, 0.165) 66.35%,
      rgba(0, 0, 0, 0.188) 69.85%,
      rgba(0, 0, 0, 0.213) 73.35%,
      rgba(0, 0, 0, 0.237) 76.85%,
      rgba(0, 0, 0, 0.262) 80.35%,
      rgba(0, 0, 0, 0.285) 83.85%,
      rgba(0, 0, 0, 0.306) 87.35%,
      rgba(0, 0, 0, 0.324) 90.85%,
      rgba(0, 0, 0, 0.338) 94.35%,
      rgba(0, 0, 0, 0.347) 97.85%,
      rgba(0, 0, 0, 0.35)
    );
    transition: opacity 0.1s ease-in-out;
  }
`;

export default PhotoCard;
