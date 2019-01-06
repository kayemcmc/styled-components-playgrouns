import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';
import GlobalStyle from './Global';

//FUNCTION FOR BREAKPOINTS
const size = {
  small: 400,
  med: 960,
  large: 1140
};
const aboveTwo = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

console.log('above', above);

//CSS Helper

const fixedTop = css`
  position: fixed;
  top: 0;
  left: 0;
`;

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I am a fake componnet</h2>
  </div>
);

const Heading = styled.h1`
  font-size: 2rem;
  ${above.med`
    color: blue;
  `}
`;

const Button = styled.button`
  padding: ${props => (props.type === 'cancel' ? '10px 5px' : '20px 10px')};
  border-radius: ${props => (props.type === 'cancel' ? '40px' : '6px')};
  border: none;
  color: ${props => (props.type === 'cancel' ? 'black' : 'white')};
  font-size: ${props => (props.type === 'cancel' ? '1rem' : '2rem')};
  outline: ${props => (props.type === 'cancel' ? '0' : '0')};
  background: indigo;
`;

const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;

const AppWrapper = styled.div`
  header {
    background: teal;
    transition: 0.3s;
    &:hover {
      background: indigo;
    }
  }
  ${Button} {
    margin-bottom: 2rem;
  }
`;

const DoubleFake = styled(Fake)`
  color: red;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <CancelButton type="cancel">The coolest</CancelButton>
          <Button type="save">The coolest</Button>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <DoubleFake />
          <Fake />
        </header>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
