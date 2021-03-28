import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";

function PhotoTags({ tags }) {
  const arr = _.range(3);
  return (
    <Tags>
      {arr.map(i => (
        <li key={i}>
          <span>{tags[i]?.title}</span>
        </li>
      ))}
    </Tags>
  );
}

PhotoTags.propTypes = {
  tags: PropTypes.array,
  title: PropTypes.string
};

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

export default PhotoTags;
