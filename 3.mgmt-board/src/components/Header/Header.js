import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #17202a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 6px -6px black;
`;

const Title = styled.h1`
  margin: 1rem;
  pointer-events: none;
  font-size: 2rem;
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Managment Boards</Title>
  </HeaderWrapper>
);

export default Header;
