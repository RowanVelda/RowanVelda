import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 97%;
  height: 220px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  margin: 13px 0;
  gap: 15px;
  @media screen and (min-width: 768px) {
    height: 101px;
    width: 390px;
    flex-direction: row;
  }
`

export const WrapperShoppingCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* justify-content: center; */
    width: 90%;
  }
`

export const ProductName = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #2c2c2c;
  @media screen and (min-width: 768px) {
    min-width: 20%;
    max-width: 20%;
  }
`

export const ImageCart = styled.img`
  width: auto;
  height: 95px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    height: 85px;
    margin-top: 0px;
  }
`

export const RemoveFromCartButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: -5px;
    right: -5px;
    border: 0;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background-color: #000;
    transition: transform 0.1s ease-in-out;
    display: block;

    &:active {
      transform: scale(1.2);
    }
  }
`

export const RemoveCartButtonMobile = styled.button`
  position: absolute;
  text-decoration: none;
  background-color: transparent;
  top: 15px;
  right: 20px;
  border: 0;
  width: 18px;
  height: 18px;
  color: #000;
  font-weight: 400;
  font-size: 2.625rem;
  line-height: 19px;
  transition: transform 0.1s ease-in-out;
  display: flex;

  &:active {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const QtdText = styled.small`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: relative;
    margin-bottom: 40px;
    margin-right: -25px;
    font-size: 0.625rem;
  }
`
