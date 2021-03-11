import React from "react";
import styled from "styled-components";
import {createPortal} from "react-dom";

function Popup({children, onClose}){

    return createPortal(
        <Container onClick={onClose}>
            <Layout>
                <Contents onClick={(e) => e.stopPropagation()}>
                    {children}
                </Contents>
            </Layout>
        </Container>,
        document.getElementById('popup')
    )
}

const Container = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
`
const Layout = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 32px 0;
`
const Contents = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 15%);
  overflow: hidden;
`


export default Popup;