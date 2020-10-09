import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './Board';
import Tickets from './Tickets';
import Header from '../components/Header/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
    font-family: 'Fira Code', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    /* color: #ECF0F1; */
    color: #ffffff;
    /* background-color: #212F3C; */
    background-color: #000000;
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
    const dataPath = '../../assets/data.json';

    const lanes = [
      { id: 1, title: 'To Do' },
      { id: 2, title: 'In Progress' },
      { id: 3, title: 'Review' },
      { id: 4, title: 'Done' },
    ];

    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Board lanes={lanes} dataSource={dataPath} />
          <Tickets dataSource={dataPath} />
        </AppWrapper>
      </>
    );
  }
}

export default App;
