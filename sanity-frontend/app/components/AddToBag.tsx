'use client'

import { Button } from '@nextui-org/react'
import { useShoppingCart } from 'use-shopping-cart'
import { ProductCart } from '../interface'
import { urlFor } from '../lib/sanity'

export default function AddToBag({
  currency,
  description,
  name,
  price,
  image
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart()

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: 'alnkndk'
  }
  return (
    <Button
      color='secondary'
      onClick={() => {
        addItem(product), handleCartClick()
      }}
    >
      Add to Bag
    </Button>
  )
}
