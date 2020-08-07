import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const DescripctionProduct = styled.section`
  padding: 0 20px;
  margin: 30px 0 60px;
  @media (min-width: 1024px) {
    margin: 30px auto 60px;
    max-width: 900px;
  }
`
const DescriptionTitle = styled.div`
  h2{
    font-size: 2.1em;
    margin: 0 0 5px;
  }
  p{
    color: var(--font-color-secondary);
  }
`
const QuantityPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`
const Quantity = styled.div`
  display: flex;
  align-items: center;
  Button{
    font-size: 1.2em;
    font-weight: bold;
    min-width: 40px;
    padding: 6px;
  }
`
const StyledTextField = styled(TextField)`
  input{
    padding: 0px;
    font-size: 2em;
    text-align: center;
    width: 60px;
    border: none;
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  fieldset{
    border: none;
  }
`
const Price = styled.div`
  color: var(--primary-color);
  p{
    font-size: 2em;
    font-weight: bold;
  }
`
const Description = styled.div`
  h3{
    font-size: 1.8em;
    font-weight: bold;
    margin: 0 0 20px;
  }
  p{
    font-size: 1.6em;
    color: var(--font-color-secondary);
  }
`

const index = () => (
  <DescripctionProduct>
    <DescriptionTitle>
      <h2>Food Name Here</h2>
      <p>Free home delivery</p>
    </DescriptionTitle>
    <QuantityPrice>
      <Quantity>
        <Button variant="contained">-</Button>
        <StyledTextField
          id="outlined-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 1, max: 2 } }}
          variant="outlined"
          defaultValue="1"
        />
        <Button variant="contained">+</Button>
      </Quantity>
      <Price>
        <p>$18.00</p>
      </Price>
    </QuantityPrice>
    <Description>
      <h3>Food Description</h3>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
    </Description>
  </DescripctionProduct>
)

export default index
