import styled from "styled-components";
import { media } from "./Responsive";
import { font } from "./Font";

export const SlideContainer = styled.div`
  font-family: ${font.en};
  flex-grow: 1;
  overflow: hidden;
  padding: 0 20px;
  position: relative;

  &:after,
  &:before {
    content: "";
    display: block;
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 100px;
  }

  &.prev:before {
    opacity: 0;
  }

  &.next:after {
    opacity: 0;
  }

  &:before {
    left: 0;
    background: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0, #fff 95%, #fff);
  }

  &:after {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 95%, #fff);
  }

  .btn {
    border: 0;
    background: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;
    width: 40px;
    height: 40px;
    transition: 0.2s;

    &.prev {
      left: 0;
      margin-left: 8px;
    }

    &.next {
      right: 0;
      margin-right: 8px;
    }

    span {
      font-size: 0;
    }
  }
`;

export const SlideList = styled.ul`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 56px;
  font-size: 14px;
  margin-left: -32px;
  scroll-behavior: smooth;

  ${media.lessThan("sm")`
    margin-left: -24px;
  `};

  &::-webkit-scrollbar {
    display: none;
    background-color: #fff;
  }

  li {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    padding-left: 32px;

    ${media.lessThan("sm")`
      padding-left: 24px;
    `};

    &.active a {
      box-shadow: inset 0 -2px #111;
    }

    a {
      display: flex;
      align-items: center;
      height: 100%;
      text-decoration: none;
      color: #727272;

      &:hover {
        color: #111;
      }
    }
  }
`;
