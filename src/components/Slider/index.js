import React from 'react'
import styled from 'styled-components'
import Itemslider from '../ItemSlider'

const Menu = styled.div`
  padding: 0 20px;
  margin: 20px 0;
`
const SliderSection = styled.section`
  width: 100%;
  overflow-x: scroll;
  position: relative;
`
const SliderConteiner = styled.div`
  white-space: nowrap;
  margin: 20px 0px;
  padding-bottom: 10px;
`

const index = () => (
  <Menu>
    <h2>Food Menu</h2>
    <SliderSection>
      <SliderConteiner>
        <Itemslider />
        <Itemslider />
        <Itemslider />
        <Itemslider />
        <Itemslider />
        <Itemslider />
        <Itemslider />
      </SliderConteiner>
    </SliderSection>
  </Menu>
)

export default index
