import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  li{
    list-style: none;
  }

  .wrapper{
    @media(min-width: 1600px) {
      max-width: 1600px;
      margin: 0 auto;
    }
    @media(max-width: 991px) {
      padding: 0;
    }
    @media(max-width: 575px) {
      flex-direction: column;
      padding: 5px;
    }
  }

  .title{
    @media(max-width: 575px) {
      font-size: 23px;
    }
  }

  .fade{
    opacity: 0;
    transition: all .5s;
  }

  .title-2{
    text-align: center;
    margin-bottom: 10px;
    font-weight: 400;
    @media(max-width: 575px) {
      font-size: 20px;
    }
  }

  .btn{
    cursor: pointer;
  }

  .btn:not([disabled]):hover{
    opacity: 0.7;
  }
`