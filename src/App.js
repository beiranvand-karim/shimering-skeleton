import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const ShimmeringKeyframe = keyframes`
  0% {
    background-position: 0;
  }

  100% {
    background-position: 100%;
  }
`;

const Something = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  background: linear-gradient(
      105.55deg,
      #f4f2f1 1.63%,
      #ffffff 36.7%,
      #f4f2f1 121.88%
    ),
    #ffffff;
  animation-duration: 1.6s;
  background-size: 1000% 100%;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ShimmeringKeyframe};
  animation-direction: alternate;
  animation-timing-function: linear;
`;

function App() {
  return (
    <Wrapper>
      <Something />
    </Wrapper>
  );
}

export default App;
