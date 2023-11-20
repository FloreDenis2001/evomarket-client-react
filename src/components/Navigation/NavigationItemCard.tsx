import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface NavigationItemCardProps{
    title:string,
    icon:any
}

const NavigationItemCard  : React.FC<NavigationItemCardProps> = ({ title,icon }) => {
  return (
   
    <li>
    <a className="navigation__desktop__link" href="#cart">
        <FontAwesomeIcon className='navigation__desktop__link__icon' icon={icon} />
        <span>{title}</span>
    </a>
</li>
  )
}

export default NavigationItemCard