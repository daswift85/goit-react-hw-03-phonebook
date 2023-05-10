import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  // partial reset
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

svg {
  display: block;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

button {
  cursor: pointer;
}

label {
  display: block;
  margin: 0;
}

input {
  display: block;
  margin: 0;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  padding: 20px 0;
  margin: 40px 0;
}
`;