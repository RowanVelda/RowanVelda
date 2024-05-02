import styled, { css } from 'styled-components'

export const drawerPaddingX = '32px'

export const DrawerWrapper = styled.div<{ visible: boolean }>`
  height: none;
  @media screen and (min-width: 768px) {
    height: 120%;
    top: 0px;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: ${(props) => (props.visible ? 100 : -1)};
    backdrop-filter: ${(props) => (props.visible ? 'blur(8px)' : undefined)};
    transition: all 0.3s ease-in-out;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 15px;
  width: 45px;
  height: 45px;
  font-size: 1.475rem;
  background-color: #000;
  border: 0;
  border-radius: 50%;
  padding-bottom: 3px;
  color: var(--terciary-color);
  @media screen and (min-width: 768px) {
    padding-bottom: 2px;
    font-size: 1rem;
    color: #fff;
  }

  &:active {
    filter: brightness(999%);
  }
`

export const CartDrawerContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  width: 85%;
  max-width: 380px;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 25px ${drawerPaddingX} 0 ${drawerPaddingX};
  background-color: ${(props) => props.theme.terciary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;

  transform: ${(props) =>
    !props.visible ? 'translate(calc(100% + 5px))' : ''};
  transition: transform 0.3s ease-in-out;
  z-index: 101;

  @media screen and (min-width: 768px) {
    max-width: 486px;
    ::-webkit-scrollbar {
      width: 8px; /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
    }
  }
`

export const text700 = css`
  font-weight: 700;
  color: var(--primary-color-100);
`

export const Title = styled.h1`
  ${text700};
  max-width: 80%;
  font-size: 1.75rem;
  line-height: 33px;
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
`

export const CheckoutButton = styled.button`
  ${text700};
  font-size: 1.25rem;
  line-height: 1rem;
  position: absolute;
  background-color: var(--secondary-color-300);
  height: 65px;
  border: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media screen and (min-width: 768px) {
    height: 97px;
  }
`

export const CartItems = styled.div`
  position: absolute;
  top: 100px;
  bottom: 180px;
  left: ${drawerPaddingX};
  right: ${drawerPaddingX};
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    left: 47px;
  }
`

export const TotalTextContainer = styled.div`
  position: absolute;
  left: ${drawerPaddingX};
  right: ${drawerPaddingX};
  bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2rem;
  color: #fff;

  @media screen and (min-width: 768px) {
    margin-bottom: 42px;
  }
`
