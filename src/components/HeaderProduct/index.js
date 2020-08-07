import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderProduct = styled.section`
  height: 350px;
  position: relative;
  img{
    width: 100%;
    height: inherit;
    object-fit: cover;
    border-radius: 15px;
    @media (min-width: 1024px) {
      border-radius: 0px;
    }
  }
`
const ButtonReturn = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: #FFFFFF;
  border:none;
  border-radius: 5px;
  padding: 10px 15px;
  &:hover{
    cursor: pointer;
  }
  i{
    color: var(--primary-color);
    font-size: 1.8em;
  }
`
const StarIcon = styled.i`
  position: absolute;
  bottom: -20px;
  right: 60px;
  font-size: 2.1em;
  color: var(--primary-color);
  background-color: #FFFFFF;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 10px 5px 10px 0px hsl(0deg 0% 0% / 45%);
`

const index = () => (
  <HeaderProduct>
    <Link to="/">
      <ButtonReturn>
        <i className="fas fa-chevron-left"></i>
      </ButtonReturn>
    </Link>
    <img src='https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2010/08/hamburguesa-huevo-960x540.jpg'
      alt='imagen-recomendada' />
    <StarIcon className="fas fa-star"></StarIcon>
  </HeaderProduct>
)

export default index
