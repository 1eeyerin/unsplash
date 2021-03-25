import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function PhotoCard({ item, idx }) {
  return (
    <li key={idx}>
      <ItemPhoto>
        <Box>
          <Image>
            <div>
              {item?.preview_photos && <img src={item.preview_photos[0]?.urls?.regular} alt="" />}
            </div>
          </Image>
          <Image>
            <Img>
              {item.preview_photos[1] && <img src={item.preview_photos[1]?.urls?.small} alt="" />}
            </Img>
            <Img>
              {item.preview_photos[2] && <img src={item.preview_photos[2]?.urls?.small} alt="" />}
            </Img>
          </Image>
        </Box>
      </ItemPhoto>
      <ItemTitle className="e_">{item.title}</ItemTitle>
      <ItemInfo>
        {item.total_photos} photos &middot; Curated by {item.user?.name}
      </ItemInfo>
      {item?.tags.length ? (
        <Tags>
          {[...Array(3)].map((n, i) => {
            return (
              <li key={i}>
                <span>{item.tags[i]?.title}</span>
              </li>
            );
          })}
        </Tags>
      ) : (
        ""
      )}
    </li>
  );
}

PhotoCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    total_photos: PropTypes.number,
    preview_photos: PropTypes.shape({
      urls: PropTypes.shape({
        regular: PropTypes.string,
        small: PropTypes.string
      })
    }),
    user: PropTypes.shape({
      name: PropTypes.string
    }),
    tags: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

const ItemPhoto = styled.div`
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

    > div {
    }
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

  span {
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

export default PhotoCard;
