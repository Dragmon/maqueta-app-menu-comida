import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemSlider = styled.div`
  width: 200px;
  height: 250px;
  background-color: var(--primary-color);
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
  position: relative;
  img{
    width: 200px;
    height: 250px;
    object-fit: cover;
  }
`
const ItemDrescription = styled.div`
  background-color: var(--color-background-secondary);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 10px;
  h3{
    color: #000;
  }
  p{
    font-size: 1.4em;
    font-weight: bold;
    color: var(--primary-color);
  }
`

const index = () => (
  <Link to="/product">
    <ItemSlider>
      <img
        src='https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2010/08/hamburguesa-huevo-960x540.jpg'
        alt='prueba'
      />
      <ItemDrescription>
        <h3>Food Name Here</h3>
        <p>$12.00</p>
      </ItemDrescription>
    </ItemSlider>
  </Link>

)

export default index
