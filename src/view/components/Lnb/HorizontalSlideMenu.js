import React, {useRef, useState, useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {SlideBtnNext, SlideBtnPrev} from "../../../icons";
import cn from "classnames";
import {scrollMenu} from "../../../lib/Common";

function HorizontalSlideMenu({topicNav}) {

    const Ref = useRef();
    const [maxScroll, setMaxScroll] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [className, setClassName] = useState("");

    useEffect(() => {
        setMaxScroll(Ref.current?.scrollWidth - Ref.current?.clientWidth);
    }, [Ref.current?.scrollWidth]);

    useEffect(() => {
        handleClassName();
    }, [scrollLeft, maxScroll]);

    const {onClickLeft, onClickRight, handleClassName} = scrollMenu({
        maxScroll,
        scrollLeft,
        setClassName,
        setScrollLeft
    });


    return (
        <Container className={cn(className)}>
            {
                scrollLeft > 0 &&
                <Button
                    type="button"
                    className="btn prev"
                    onClick={onClickLeft}>
                    <SlideBtnPrev/>
                    <span>prev button</span>
                </Button>
            }
            <List ref={Ref} scrollLeft={scrollLeft}>
                {
                    topicNav.map((item, i) => <li key={i}><Link to={`/t/${item.slug}`}>{item.title}</Link></li>)
                }
            </List>
            {
                scrollLeft < maxScroll &&
                <Button
                    type="button"
                    className="btn next"
                    onClick={onClickRight}>
                    <SlideBtnNext/>
                    <span>next button</span>
                </Button>
            }
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
  }

  &:after {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 95%, #fff);
  }

  &.prev:before {
    opacity: 0;
  }

  &.next:after {
    opacity: 0;
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
    transition: .2s;

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

`
const Button = styled.button`
`
const List = styled.ul`
  white-space: nowrap;
  height: 56px;
  font-size: 14px;
  margin-left: -32px;
  transition: transform .4s;
  transform: ${(props) => `translateX(-${props.scrollLeft}px)`};

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