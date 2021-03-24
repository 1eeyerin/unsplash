import styled from "styled-components";

export const ControlContents = styled.div`
  .selectBtn {
    border: 0;
    cursor: pointer;
    text-align: left;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    padding: 10px;
    font-size: 14px;
    color: #767676;
    white-space: nowrap;
    transition: color 0.1s ease-in-out;

    ¬ &:hover {
      color: #111;

      &:after {
        border-color: #767676 transparent transparent;
      }
    }

    &:after {
      content: "";
      display: inline-block;
      margin-left: 8px;
      position: relative;
      top: 3px;
      border: 5px solid transparent;
      border-top-color: #d1d1d1;
      transition: border 0.1s ease-in-out;
    }

    &.clear:after {
      display: none;
    }
  }
`;
export const ControlMenu = styled.div`
  margin-top: 4px;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 135px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 16%);

  ul {
    padding: 8px 0;

    li {
      color: #767676;
      font-size: 14px;
      text-align: left;
      overflow: hidden;
      position: relative;

      &.active {
        pointer-events: none;
      }

      button {
        outline: 0;
      }
    }
  }
`;

export const ControlItem = styled.button`
  border: 0;
  cursor: pointer;
  background: 0;
  color: inherit;
  font-size: inherit;
  text-align: left;
  outline: 0;
  display: flex;
  width: 100%;
  padding: 8px 24px;
  position: relative;

  svg {
    width: 16px;
    height: 16px;
    fill: #111;
    position: absolute;
    top: 8px;
    left: 5px;
  }

  &:hover:not(div) {
    color: #111;
    background: #f5f5f5;
  }
`;
