import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, social, elevation, fixed, serif } from '../utilities';

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} className="logo" alt="logo" />
    Hello
  </header>
);

//One off styled components then I like to keept he styled components in the same file if they will not be reused anywhere else

//Not reusable css  -- more of a higher order component
// const StyledHeader = styled(Header)`
//   background: #524763;
//   padding: 10px 5%;
//   .logo {
//     width: 60px;
//   }
// `;
// export default StyledHeader;

export default styled(Header)`
  background: ${purple};
  padding: 10px 5%;
  ${fixed({ yProp: 'top' })};
  ${elevation[1]};
  ${serif};
  transition: 0.3s;
  width: 100%;
  &:hover {
    background: ${social.facebook};
  }
  .logo {
    width: 60px;
  }
`;
