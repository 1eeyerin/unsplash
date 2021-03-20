import styled from "styled-components";
import { media } from "./Responsive";

export const Buttons = styled.div`
  display: flex;
`;

export const Btn = styled.button`
  display: flex;
  height: 32px;
  padding: 0 11px;
  font-size: 14px;
  line-height: 30px;
  color: #767676;
  background-color: hsla(0, 0%, 100%, 0.9);
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

  span {
    margin-left: 6px;

    ${media.lessThan("sm")`
      font-size: 0;
      margin-left: 0;
    `};
  }

  & + button {
    margin-left: 8px;
  }
`;
