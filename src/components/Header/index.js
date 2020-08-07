import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  background-color: var(--primary-color);
  border-radius: 25px;
  padding: 40px 25px 30px;
  color: #FFFFFF;
  @media(min-width: 1024px){
    border-radius: 0px;
  }
`
const TitleDiv = styled.div`
  margin: 0 0 15px;
  h1{
    margin: 0 0 10px;
  }
`
const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media(min-width: 1024px){
    justify-content: space-around;
    max-width: 900px;
    margin: 0 auto;
  }
`
const InputSearch = styled.div`
  width: 80%;
  border: 1px solid var(--border-color);
  background-color: var(--color-background);
  border-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: start;
  i{
    color:var(--border-color);
    font-size: 1.6em;
    margin: 0 15px 0;
  }
  input{
    border: none;
    width: 80%;
    font-size: 1.6em;
    height: 25px;
    outline: none;
  }
`
const ButtonFilter = styled.button`
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--color-background);
  outline: none;
  i{
    font-size: 1.6em;
    color: #000;
    padding: 0 5px;
  }
`

export default function index() {
  return (
    <HeaderStyled>
      <TitleDiv>
        <h1>Special food for you</h1>
        <p>It is a long established fact that</p>
      </TitleDiv>
      <SearchDiv>
        <InputSearch>
          <i className="fas fa-search"></i>
          <input type='text' name='buscar' placeholder='Search something'>
          </input>
        </InputSearch>
        <ButtonFilter>
          <i className="fas fa-filter"></i>
        </ButtonFilter>
      </SearchDiv>
    </HeaderStyled>
  )
}
