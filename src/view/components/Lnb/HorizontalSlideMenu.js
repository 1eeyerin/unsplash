import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {SlideBtnNext, SlideBtnPrev} from "../../../icons";
import cn from "classnames";
import {moveSlideMenu} from "../../../lib/Common";

function HorizontalSlideMenu() {

    const slideRef = useRef();
    const [breakPoint, setBreakPoint] = useState("");

    const {lnbMenu} = moveSlideMenu({slideRef, setBreakPoint});

    return (
        <Container className={cn(breakPoint)}>
            <Button
                type="button"
                className="btn prev"
                onClick={() => lnbMenu("prev")}>
                <SlideBtnPrev/><span>prev button</span>
            </Button>
            <List ref={slideRef}>
                <li><Link to="/t/wallpapers">Wallpapers</Link></li>
                <li><Link to="/t/nature">Nature</Link></li>
                <li><Link to="/t/people">People</Link></li>
                <li><Link to="/t/architecture">Architecture</Link></li>
                <li><Link to="/t/current-events">Current Events</Link></li>
                <li><Link to="/t/business-work">Business & Work</Link></li>
                <li><Link to="/t/experimental">Experimental</Link></li>
                <li><Link to="/t/fashion">Fashion</Link></li>
                <li><Link to="/t/film">Film</Link></li>
                <li><Link to="/t/health-wellness">Health & Wellness</Link></li>
                <li><Link to="/t/interiors">Interiors</Link></li>
                <li><Link to="/t/street-sphotography">Street Photography</Link></li>
                <li><Link to="/t/technology">Technology</Link></li>
                <li><Link to="/t/travel">Travel</Link></li>
                <li><Link to="/t/textures-patterns">Textures & Patterns</Link></li>
                <li><Link to="/t/animals">Animals</Link></li>
                <li><Link to="/t/food-drink">Food & Drink</Link></li>
                <li><Link to="/t/athletics">Athletics</Link></li>
                <li><Link to="/t/spirituality">Spirituality</Link></li>
                <li><Link to="/t/arts-sculture">Arts & Culture</Link></li>
                <li><Link to="/t/history">History</Link></li>
                <li><Link to="/t/purple">Purple</Link></li>
                <li><Link to="/t/yellow">Yellow</Link></li>
            </List>
            <Button
                type="button"
                className="btn next"
                onClick={() => lnbMenu("next")}>
                <SlideBtnNext/><span>next button</span>
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