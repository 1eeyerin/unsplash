import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {SlideBtnNext, SlideBtnPrev} from "../../../icons";
import cn from "classnames";
import {moveSlideMenu} from "../../../lib/Common";

function HorizontalSlideMenu({topicNav}) {

    const slideRef = useRef();
    const [breakPoint, setBreakPoint] = useState("");

    const {onScroll, onClickLeft, onClickRight} = moveSlideMenu({slideRef, setBreakPoint});

    return (
        <Container className={cn(breakPoint)}>
            <Button
                type="button"
                className="btn prev"
                onClick={onClickLeft}>
                <SlideBtnPrev/>
                <span>prev button</span>
            </Button>
            <List ref={slideRef} onScroll={onScroll}>
                {
                    topicNav.map((item, i) => <li key={i}><Link to={`/t/${item.slug}`}>{item.title}</Link></li>)
                }
            </List>
            <Button
                type="button"
                className="btn next"
                onClick={onClickRight}>
                <SlideBtnNext/>
                <span>next button</span>
            </Button>
        </Container>
    )
}

const Container = styled.div`
  flex-grow: 1;
  overflow: hidden;
  padding: 0 20px;
  position: relative;

  &:after, &:before {
    transition: opacity .2s ease-in-out;
    opacity: 0;
    content: "";
    display: block;
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 100px;
  }

  &:before {
    left: 0;
    background: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0, #fff 95%, #fff);
    opacity: 0;
  }

  &:after {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 95%, #fff);
    opacity: 1;
  }


  .btn {
    border: 0;
    background: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    outline: 0;
    cursor: pointer;
    z-index: 2;
    width: 40px;
    height: 40px;
    transition: .2s;

    &.prev {
      left: 0;
      margin-left: 8px;
      opacity: 0;
    }

    &.next {
      right: 0;
      margin-right: 8px;
    }

    span {
      font-size: 0;
    }
  }

  &.prev .prev {
    opacity: 0;
  }

  &.prev:before {
    opacity: 0;
  }

  &.next .prev {
    opacity: 1;
  }

  &.next:before {
    opacity: 1;
  }

  &.next .next {
    opacity: 0;
  }

  &.next:after {
    opacity: 0;
  }

  &.active .btn {
    opacity: 1;
  }

  &.active:before, &.active:after {
    opacity: 1;
  }

`
const Button = styled.button`
`
const List = styled.ul`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 56px;
  font-size: 14px;
  margin-left: -32px;

  &::-webkit-scrollbar {
    display: none;
    background-color: #fff;
  }

  li {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    padding-left: 32px;

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
`

export default HorizontalSlideMenu;