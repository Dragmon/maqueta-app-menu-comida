import React from 'react'
import styled from 'styled-components'

const NavbarDiv = styled.nav`
  background-color: var(--primary-color);
  border-radius: 0 0 25px 25px;
  display: flex;
  align-items:center;
  justify-content: space-around;
  color: var(--border-color);
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  @media(min-width: 1024px){
    border-radius: 0px;
  }
  i{
    font-size: 3em;
    &:hover{
      color: #FFF;
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
