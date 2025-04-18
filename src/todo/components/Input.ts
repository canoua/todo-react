import styled from "styled-components"

export const Input = styled.input `
  padding: 5px;
  margin-right: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  font-size: 25px;
  width: 90%; 
  
  @media(max-width: 375px) {
    font-size: 20px;
  }
`