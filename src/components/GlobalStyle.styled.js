import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body{
background-color: #bce7d7;
color: #EBD8FF;
font-size:20px;
font-family: 'Montserrat', sans-serif;
font-weight: 500;
line-height: 1.2;}

ul{
list-style: none;
padding-left: 0;
margin: 0;
}

p{
margin: 0;}

h1{
margin: 0}

a{text-decoration:none;color:inherit;
}`;
