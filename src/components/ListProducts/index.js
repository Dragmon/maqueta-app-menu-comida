import React from 'react'
import styled from 'styled-components'
import ItemProducts from '../ItemProducts'

const SectionListItem = styled.section`
  padding: 0 20px;
  margin: 0 0 100px;
  @media(min-width: 1024px){
    margin: 0 auto 100px;
    max-width: 900px;
  }
  @media(min-width: 768px){
    display: flex;
    flex-wrap: wrap;
  }
  h2{
    margin: 0 0 20px;
    min-width: 100%;
  }
`

const index = () => (
  <SectionListItem>
    <h2>Recommended</h2>
    <ItemProducts />
    <ItemProducts />
    <ItemProducts />
    <ItemProducts />
    <ItemProducts />
  </SectionListItem>
)

export default index
