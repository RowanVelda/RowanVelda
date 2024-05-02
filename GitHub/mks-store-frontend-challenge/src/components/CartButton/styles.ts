import styled from 'styled-components'

export const CardButtonContainer = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  width: 52px;
  height: 26px;
  border: 0;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    width: 90px;
    height: 45px;
    margin-left: 25px;
  }
`
export const WrapperIconMobile = styled.i`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const WrapperIcon = styled.i`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const Counter = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`
