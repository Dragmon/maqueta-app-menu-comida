import React from 'react';
import styled from 'styled-components';

const AddCartDiv = styled.div`
  background-color: var(--primary-color);
  display: flex;
  align-items:center;
  justify-content: space-around;
  color: var(--border-color);
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  i{
    font-size: 2em;
    color: #FFF;
    &:hover{
      cursor: pointer;
    }
  }
`

export default function index() {
  return (
    <AddCartDiv>
      <i className="fas fa-shopping-basket">
        Add to cart
      </i>
    </AddCartDiv>
  )
}
