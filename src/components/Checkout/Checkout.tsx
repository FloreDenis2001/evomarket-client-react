import React, { useState } from 'react'
import FormCheckout from './FormCheckout'
import { Card } from '@mui/material'
import CardTotalCheckout from './CardTotalCheckout'
import { useSelector } from 'react-redux'
import { selectBag } from '../../store/bag/bag.selectors'
import CreateOrderRequest from '../../models/Order/CreateOrderRequest'

const Checkout : React.FC = () => {



  


  return (
    <div className='checkout'>
        <FormCheckout/>
        <CardTotalCheckout/>
    </div>
  )
}

export default Checkout