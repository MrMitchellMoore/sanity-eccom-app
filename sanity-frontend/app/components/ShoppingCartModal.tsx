'use client'

import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react'
import { useShoppingCart } from 'use-shopping-cart'
import Image from 'next/image'

export default function ShoppingCartModal() {
  const { onOpen, onClose } = useDisclosure() // isOpen
  const backdrops = ['blur'] // "opaque", "blur", "transparent"
  //   const [backdrop, setBackdrop] = React.useState<string>('blur')

  //   const handleOpen = (option: string) => {
  //     setBackdrop(backdrop)
  //     onOpen()
  //   }

  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice
  } = useShoppingCart()

  return (
    <Modal
      backdrop='blur'
      isOpen={shouldDisplayCart}
      onOpenChange={() => handleCartClick()}
      onClose={onClose}
      className='z-100 overflow-hidden'
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              Shopping Cart
            </ModalHeader>
            <ModalBody>
              {cartCount === 0 ? (
                <h1 className='py-6'>You do not have any items!</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map(entry => (
                    <li key={entry.id} className='flex py-6'>
                      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                        <Image
                          src={entry.image as string}
                          alt='Product Image'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='ml-4 flex flex-1 flex-col'>
                        <div>
                          <div className='flex justify-between text-base font-medium text-gray-500'>
                            <h3 className='text-blue-400'>{entry.name}</h3>
                            <p className='ml-4 text-blue-400'>${entry.price}</p>
                          </div>
                          <p className='mt-1 line-clamp-2 text-sm text-gray-500'>
                            {entry.description}
                          </p>
                        </div>
                        <div className='flex flex-1 items-end justify-between text-sm'>
                          <p className='text-gray-300'>QTY: {entry.quantity}</p>
                          <div className='flex'>
                            <button
                              type='button'
                              className='font-medium text-secondary hover:text-secondary/80'
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ModalBody>
            <ModalFooter className='flex flex-col'>
              <div className='border-b border-t border-gray-200 px-4 py-6 sm:px-6'>
                <div className='flex justify-between text-base font-medium text-blue-400'>
                  <p>Subtotal:</p>
                  <p>${totalPrice}</p>
                </div>
                <p className='mt-0.5 text-xs text-gray-300'>
                  Shipping and Taxes are calculated at checkout.
                </p>
              </div>
              <Button color='primary' onPress={onClose}>
                Checkout
              </Button>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
