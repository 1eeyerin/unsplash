import React from "react";
import styled from "styled-components";
import ScrollMenu from "../ScrollMenu";
import { Link } from "react-router-dom";
import { SlideList } from "../../../styled/SlideMenu";

function SearchScrollMenu({ data }) {
  return (
    <Container>
      <ScrollMenu data={data}>
        {data?.map((item, idx) => {
          return (
            <li key={idx}>
              <Link to={`/s/photos/${item.title}`}>
                <span className="e_">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ScrollMenu>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 24px;

  ${SlideList} {
    height: 42px;
    margin: 0 -24px;

    li {
      text-align: center;
      border: 1px solid #d1d1d1;
      text-transform: capitalize;
      transition: border-color 0.1s ease-in-out;
      border-radius: 5px;
      width: 145px;
      padding: 0;
      margin: 0 4px;

      &:hover {
        border-color: #111;
      }

      a {
        justify-content: center;
        padding: 0 12px;
        font-size: 14px;

        span {
          display: block;
        }
      }
    }
  }
`;

export default SearchScrollMenu;
