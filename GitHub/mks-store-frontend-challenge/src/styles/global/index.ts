import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --header-height: 48px;
    --footer-height: 34px;
    --global-padding: 20px;
    --primary-color-100: ${(props) => props.theme.primary['100']};
    --primary-color-200: ${(props) => props.theme.primary['200']};
    --secondary-color-100: ${(props) => props.theme.secondary['100']};
    --secondary-color-200: ${(props) => props.theme.secondary['200']};
    --secondary-color-300: ${(props) => props.theme.secondary['300']};   
    --terciary-color: ${(props) => props.theme.terciary};
    --black: #000000;
        
    --shadow-color: ${(props) => props.theme.shadow};
    /* Z-index */
    --z-cart: 100;
    --z-fixed: 10;
  }
  @media screen and (min-width: 760px) {
    :root {
        --global-padding: 40px;
        --header-height: 70px;
    }
  }

  @media screen and (min-width: 1240px) {
    :root {
        --global-padding: 65px;
        --header-height: 101px;
    }
  }

  //font-size: 16px (Desktop);
  html {
    @media (max-width: 1000px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  /* [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  } */
  /* .react-modal-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .react-modal-content {
    width: 100%;
    height: 420px;
    max-width: 580px;
    background-color:#fff;
    padding: 2rem;
    position: relative;
    border-radius: 0.5rem;
    top: 9%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    overflow: hidden;
    @media (max-height: 560px) {
      height: 70%;
      width: 90%;
    }
    @media (max-height: 480px) {
      height: 60%;
      overflow: visible;
    }
  } */
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  *::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;        
  }

  main {
    width: 100%;
    margin-top: calc(50px + var(--header-height));
    margin-bottom: var(--footer-height);
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
  body {
    background-color: var(--primary-color-100);
    color: var(--black);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input:focus, textarea:focus {
    outline: none;
  }

  button, a {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
