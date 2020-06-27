import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0; 
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
}

body,#root{
  height: 100%;
  width: 100%;
}

body{
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));

}

html{
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

button{
  cursor: pointer;
}
`;
