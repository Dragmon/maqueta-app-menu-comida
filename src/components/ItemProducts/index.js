import React from 'react'
import styled from 'styled-components'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const ContentItem = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--color-background-secondary);
  border-radius: 15px;
  display: flex;
  margin: 0 0 20px 0;
  @media(min-width: 768px){
    flex: 0 50%;
    max-width: 48%;
    margin: 0 10px 20px 0;
  }
`
const ImagesItem = styled.img`
  height: inherit;
  border-radius: 15px;
`
const ItemDescription = styled.div`
  padding: 0 0 0 15px;
  p{
    color: var(--primary-color);
    font-size: 1.4em;
    font-weight: bold;
  }
`
const StyledBox = styled(Box)`
  margin: 0px !important;
  padding: 0px;
  .MuiRating-root{
    position: initial;
  }
`

const index = () => (
  <ContentItem>
    <ImagesItem
      src='https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2010/08/hamburguesa-huevo-960x540.jpg'
      alt='imagen-recomendada'
    />
    <ItemDescription>
      <h3>Food Name Here</h3>
      <StyledBox component="fieldset" mb={2} borderColor="transparent">
        <Rating name="read-only" value={3} readOnly />
      </StyledBox>
      <p>17.41</p>
    </ItemDescription>
  </ContentItem>
)

export default index
