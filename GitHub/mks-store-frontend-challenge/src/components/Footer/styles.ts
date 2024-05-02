import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: var(--footer-height);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--primary-color-200);

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);

  h5 {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    color: var(--secondary-color-300);
  }
`
