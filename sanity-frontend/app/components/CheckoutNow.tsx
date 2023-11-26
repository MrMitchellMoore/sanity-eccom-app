'use client'

import { Button } from '@nextui-org/react'
import { useShoppingCart } from 'use-shopping-cart'

export default function CheckoutNow() {
  const { addItem, handleCartClick } = useShoppingCart()
  return <Button color='default'>Checkout Now</Button>
}
