import React from 'react'
import NavigationScreen from './Navigation/NavigationScreen'
import MeniuBar from './ui/MeniuBar'
import NavigationMobile from './Navigation/NavigationMobile'

const Header = () => {
  return (<>

    <NavigationMobile />
    <NavigationScreen />
    <MeniuBar />
  </>
  )
}

export default Header