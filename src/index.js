import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Author from './component/Author/Author';
import { createGlobalStyle } from 'styled-components';
import Info from './component/Info/Info';


const GlobalStyled=createGlobalStyle`
*{
  box-sizing:border-box
  margin:0;
  padding:0;
  &::-webkit-scrollbar {
    width: 0;
  }
}
body{
background: -webkit-linear-gradient(90deg, #72db70,#dbd870,#db7070);
background: linear-gradient(90deg, #72db70,#dbd870,#db7070);
display:flex;
justify-content: center;
padding-top:50px

}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GlobalStyled/>
  <Author/>
    <App />
    <Info/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

