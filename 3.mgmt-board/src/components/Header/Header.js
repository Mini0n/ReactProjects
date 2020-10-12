import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  /* background-color: #17202a; */
  background: rgba(98, 101, 103, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgb(220, 118, 51);
  /* box-shadow: 0 8px 6px -6px black; */
`;

const Title = styled.h1`
  margin: 1rem;
  pointer-events: none;
  font-size: 2rem;
  /* color: rgb(211, 84, 0); */
`;

const Header = () => (
  <HeaderWrapper>
    <Title>::: TUDU :::</Title>
  </HeaderWrapper>
);

export default Header;
