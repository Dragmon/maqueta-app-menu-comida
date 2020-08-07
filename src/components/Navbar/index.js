import React from 'react'
import styled from 'styled-components'

const NavbarDiv = styled.nav`
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
    font-size: 3em;
    &:hover{
      color: #FFF;
      cursor: pointer;
    }
  }
`

export default function index() {
  return (
    <NavbarDiv>
      <i className="fas fa-home"></i>
      <i className="far fa-heart"></i>
      <i className="fas fa-shopping-basket"></i>
      <i className="far fa-user-circle"></i>
    </NavbarDiv>
  )
}
