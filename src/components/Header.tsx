import React from 'react'
import NavigationScreen from './Navigation/NavigationScreen'
import NavigationMobile from './Navigation/NavigationMobile'
import NavigationLeftBar from './Navigation/NavigationLeftBar'

const Header = () => {
  return (<>
     
    <NavigationMobile />
    <NavigationScreen />
  </>
  )
}

export default Header