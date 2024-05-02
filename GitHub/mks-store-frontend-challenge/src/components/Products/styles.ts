import styled from 'styled-components'

export const ContainerProduct = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 18px auto 5px auto;
  gap: 18px;
  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`
