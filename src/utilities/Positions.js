import { css } from 'styled-components';

export const fixedTop = css`
  position: fixed;
  top: 0;
  left: 0;
`;

export const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => {
  return css`
    position: fixed;
    ${yProp}: ${y};
    ${xProp}: ${x};
  `;
};

export const absolute = ({ x = 0, y = 0 } = {}) => {
  return css`
    position: absolute;
    top: ${y};
    left: ${x};
  `;
};
