import React from 'react';
import styled from 'styled-components';

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: #2e4053;
  border-radius: 20px;
  min-height: 50vh;
  width: 24vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 2px solid #212f3c;
`;

const Lane = ({ title }) => (
  <LaneWrapper>
    <Title>{title}</Title>
  </LaneWrapper>
);

export default Lane;
