import React from 'react'
import ReactSwitch from 'react-switch'
import HeaderSearchIcon from '../../assets/HeaderSearchIcon'
import MenuIcon from '../../assets/MenuIcon'
import { useImages } from '../../contexts/ImagesContext'
import { useMobile } from '../../contexts/MobileContext'
import { useThemeMode } from '../../contexts/ThemeModeContext'
import { Flex } from '../../styles/ComponentStyles'
import SearchBar from '../SearchBar'
import { FloatingContainer, HeaderContaier, HeaderContent, PageLinks, ThemeController } from './styles'
const Logo = require("../../assets/logo.png")
const DarkModeLogo = require("../../assets/dark_mode_logo.png")

const Header = () => {

  const { selectTheme, theme } = useThemeMode()
  const { showMenu, showMobileSearch, toggleMobileMenu, toggleMobileSearch } = useMobile()
  const { toggleQueryView } = useImages()

  const changeTheme = () => {
    if (theme === 'dark') {
      selectTheme('light')
    } else {
      selectTheme('dark')
    }
  }

  return (
    <HeaderContaier>
      <HeaderContent>
        <img src={theme === 'light' ? Logo : DarkModeLogo} alt="logo"
          onClick={() => toggleQueryView(false)} style={{cursor: 'pointer'}} />
        <div className='header-search-container' style={{width: '100%'}}>
          <SearchBar type='header' />
        </div>
        <PageLinks>
          <a href="/">Explore</a>
          <a href="/">Collection</a>
          <a href="/">Community</a>
        </PageLinks>
        <ThemeController>
          <p>Dark Mode</p>
          <div>
            <ReactSwitch
              width={44}
              height={24}
              handleDiameter={18}
              checked={theme === 'dark'}
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={changeTheme}
              onColor={"#FFFFFF"}
              onHandleColor={"#858484"}
              offColor={"#858484"}
              offHandleColor={"#FFFFFF"}
            />
          </div>
        </ThemeController>
        <Flex gap={10} className="mobile-icons">
          <HeaderSearchIcon onClick={() => {
            toggleMobileSearch(!showMobileSearch)
            toggleMobileMenu(false)
          }} className='mobile-search-icon' />
          <MenuIcon onClick={() => {
            toggleMobileMenu(!showMenu)
            toggleMobileSearch(false)
          }} className='mobile-menu-icon' />
        </Flex>

        <FloatingContainer height={"100vh"}
          className={`${showMobileSearch && !showMenu ? 'expand' : 'collapse'}`}>
          <SearchBar type='header' />
        </FloatingContainer>

        <FloatingContainer height={"100vh"}
          className={`${showMenu && !showMobileSearch ? 'expand' : 'collapse'}`}>
          <PageLinks className='mobile'>
            <a href="/">Explore</a>
            <a href="/">Collection</a>
            <a href="/">Community</a>
          </PageLinks>
          <ThemeController className='mobile'>
            <p>Dark Mode</p>
            <div>
              <ReactSwitch
                width={44}
                height={24}
                handleDiameter={18}
                checked={theme === 'dark'}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={changeTheme}
                onColor={"#FFFFFF"}
                onHandleColor={"#858484"}
                offColor={"#858484"}
                offHandleColor={"#FFFFFF"}
              />
            </div>
          </ThemeController>
        </FloatingContainer>
      </HeaderContent>
    </HeaderContaier>
  )
}

export default Header