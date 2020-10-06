import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './Board';
import Header from '../components/Header/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    color: #ECF0F1;

    background-color: #212F3C;
  }

  html, body, #root, #root>div {
    height: 100%;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Board />
        </AppWrapper>
      </>
    );
  }
}

export default App;
