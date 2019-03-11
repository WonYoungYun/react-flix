import React from 'react';
import styled, { keyframes } from 'styled-components';


const isLoading = keyframes`
  0% {
    top: 6px;
    height: 51px;
  }
  50%,
  100% {
    top: 19px;
    height: 26px;
  }
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    justify-content: center;
    font-size: 28px;
    margin-top: 20px;
`;

const Lds = styled.div`
    display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #3498db;
  animation: ${isLoading} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  &:nth-child(1){
      left:6px;
      animation-delay: -0.24s;
  }
  &:nth-child(2){
    left: 26px;
    animation-delay: -0.12s;
  }
  &:nth-child(3){
      left:45px;
      animation-delay: 0s;
  }
`;


const Loading = styled.div`
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 47%;
  left: 47%;
`;





export default () => (
    <Container>
        {/* <Container><span role="img" aria-label="로딩중">⏳</span></Container> */}

        <Loading>
            <Lds />
            <Lds />
            <Lds />
        </Loading>
    </Container>
)

