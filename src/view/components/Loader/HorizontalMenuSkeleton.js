import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import _ from "lodash";

function HorizontalMenuSkeleton() {

    const arr = _.range(15);

    return (
        <Container>
            <Row>
                {
                    arr.map((i) => (
                        <Col key={i}>
                            <Skeleton count={1}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow:hidden;
`
const Row = styled.div`
  display: flex;
`
const Col = styled.div`
  width: 70px;
  margin-left: 32px;
`

export default HorizontalMenuSkeleton;