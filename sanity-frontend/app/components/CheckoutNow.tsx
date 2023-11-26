'use client'

import { Button } from '@nextui-org/react'
import { useShoppingCart } from 'use-shopping-cart'
import { ProductCart } from '../interface'
import { urlFor } from '../lib/sanity'

export default function CheckoutNow({
  currency,
  description,
  name,
  price,
  price_id,
  image
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart()

  function buyNow(priceId: string) {
    return checkoutSingleItem(priceId)
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id
  }
  return (
    <Button color='primary' onPress={() => buyNow(product.price_id)}>
      Checkout
    </Button>
  )
}
