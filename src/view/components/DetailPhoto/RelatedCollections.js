import React from "react";
import styled from "styled-components";

function RelatedCollections({ data, Title }) {
  return (
    <Container>
      <Title>Related collections</Title>
      <Ul>
        {data?.results.map((item, idx) => {
          return (
            <Li key={idx}>
              <PreviewPhoto>
                <Layout>
                  <Image>
                    <img src={item.preview_photos[0]?.urls?.regular} alt="" />
                  </Image>
                  <Image>
                    <Img>
                      <img src={item.preview_photos[1]?.urls?.small} alt="" />
                    </Img>
                    <Img>
                      <img src={item.preview_photos[2]?.urls?.small} alt="" />
                    </Img>
                  </Image>
                </Layout>
              </PreviewPhoto>
              <ItemTitle className="e_">{item.title}</ItemTitle>
              <ItemInfo>
                {item.total_photos} photos &middot; Curated by {item.user?.name}
              </ItemInfo>
              <Tags>
                {[...Array(3)].map((n, i) => {
                  return (
                    <li key={i}>
                      <a href="#">{item.tags[i]?.title}</a>
                    </li>
                  );
                })}
              </Tags>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 12px 85px;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  width: calc(33.3333% - 16px);
  overflow: hidden;

  + li {
    margin-left: 24px;
  }
`;
const PreviewPhoto = styled.div`
  height: 0;
  padding-bottom: 70%;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  margin-bottom: 16px;
`;
const Layout = styled.div`
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
const Image = styled.div``;
const Img = styled.div`
  height: 50%;
  overflow: hidden;
  position: relative;

  + div {
    margin-top: 2px;
  }
`;
const ItemTitle = styled.h3`
  font-size: 18px;
  line-height: 1.34;
  font-weight: 600;
  color: #111;
  margin-bottom: 8px;
`;
const ItemInfo = styled.span`
  font-size: 14px;
  color: #767676;
  margin-bottom: 16px;
  display: block;
`;
const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;

  li {
    padding: 0 0 8px 8px;
  }

  a {
    background-color: #eee;
    padding-right: 8px;
    padding-left: 8px;
    border-radius: 2px;
    text-decoration: none;
    font-size: 14px;
    text-transform: capitalize;
    line-height: 26px;
    display: inline-block;
  }
`;

export default RelatedCollections;
