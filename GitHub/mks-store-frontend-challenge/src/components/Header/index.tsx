import { useContext } from 'react'
import { HeaderContainer, Logo, LogoName, WrapperIcons } from './styles'

import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { CartButton } from '../CartButton'

export interface HeaderProps {
  toggleTheme(): void
  onOpenCart: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, onOpenCart }) => {
  const { title } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <Logo>
        <LogoName>MKS</LogoName>
        <span>Sistemas</span>
      </Logo>
      <WrapperIcons>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          onColor={'#85b0f0'}
          offColor={'#4a4b4d'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
        />
        <CartButton onClick={onOpenCart} data-testid="button-cart" />
      </WrapperIcons>
    </HeaderContainer>
  )
}
