import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './Global';
import { Heading, Button, CancelButton } from './elements';
import Header from './layouts/Header';

// const Fake = ({ className }) => (
//   <div className={className}>
//     <h2>I am a fake componnet</h2>
//   </div>
// );

// const AppWrapper = styled.div`
//   header {
//     background: teal;
//     transition: 0.3s;
//     &:hover {
//       background: indigo;
//     }
//   }
//   ${Button} {
//     margin-bottom: 2rem;
//   }
// `;

// const DoubleFake = styled(Fake)`
//   color: red;
// `;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default App;
