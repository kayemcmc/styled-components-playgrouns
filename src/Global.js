import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

//mainly use it for browser resettin
const GlobalStyle = createGlobalStyle`
${normalize()};
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
    body {
        background-color: red;
        margin: 0;
        padding: 65px 0 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
    .App {
        text-align: center;
      }
      
      .App-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 40vmin;
      }
      
      .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }
      
      .App-link {
        color: #61dafb;
      }
      
      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      main {
        width: 90%;
        margin: 0 auto;
      }
      
`;

export default GlobalStyle;
