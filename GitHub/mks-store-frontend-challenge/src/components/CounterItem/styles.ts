import styled from 'styled-components'

export const CounterItemContainer = styled.div`
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  vertical-align: baseline;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 20px;
    width: 55px;
    margin-left: -10px;
  }
`

export const Counter = styled.span`
  display: inline-block;
  font-size: 1, 25rem;
  line-height: 24px;
  border: 0.2px solid #bfbfbf;
  border-top: 0;
  border-bottom: 0;
  width: 40px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 30px;
    line-height: 18px;
    font-size: 0.75rem;
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`

export const ButtonCounter = styled.button`
  width: 40px;
  font-weight: 400;
  color: #000000;
  background-color: transparent;
  border: 0;
  transition: color 0.1s ease-in-out;
  font-size: 1.375rem;

  &:active {
    color: ${(props) => props.theme.terciary};
  }

  &[disabled] {
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`
export const ButtonCounterLess = styled.button`
  width: 40px;
  font-weight: 400;
  color: #000000;
  background-color: transparent;
  border: 0;
  transition: color 0.1s ease-in-out;
  font-size: 1.625rem;

  &:active {
    color: ${(props) => props.theme.terciary};
  }

  &[disabled] {
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3px;
    font-size: 1rem;
  }
`
