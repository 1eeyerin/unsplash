import React, {useRef, useState, useEffect} from "react";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {SlideBtnNext, SlideBtnPrev} from "../../../icons";
import cn from "classnames";
import {scrollMenu} from "../../../lib/Common";
import _ from "lodash";
import HorizontalMenuSkeleton from "../Loader/HorizontalMenuSkeleton";

function HorizontalSlideMenu({topicNav}) {

    const location = useLocation();
    const topicLocation = location.pathname.startsWith('/t/') ? location.pathname.split('/').pop() : "";

    const slideRef = useRef();
    const [className, setClassName] = useState("");
    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);


    useEffect(() => {
        (!_.isEmpty(topicNav)) && slideRef.current.dispatchEvent(new Event("scroll"));
    }, [slideRef.current?.scrollWidth]);

    useEffect(() => {
        handleClassName();
    }, [scrollLeft, maxScroll]);

    const {onScroll, onClickLeft, onClickRight, handleClassName} = scrollMenu({
        slideRef,
        scrollLeft,
        setScrollLeft,
        setClassName,
        maxScroll,
        setMaxScroll
    });


    if(_.isEmpty(topicNav)) return <HorizontalMenuSkeleton />;

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
            <List ref={slideRef} onScroll={onScroll}>
                {
                    topicNav.map((item, i) => {
                        return (
                                <li
                                    key={i}
                                    className={topicLocation === item.slug ? "active" : ""}>
                                    <Link to={`/t/${item.slug}`}>{item.title}</Link>
                                </li>
                            )
                    })
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
  overflow-x: scroll;
  overflow-y: hidden;
  height: 56px;
  font-size: 14px;
  margin-left: -32px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
    background-color: #fff;
  }

  li {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    padding-left: 32px;
    
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
`

export default HorizontalSlideMenu;