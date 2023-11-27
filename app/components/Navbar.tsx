'use client'

import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { AcmeLogo } from './AcmeLogo'
import { ShoppingBasket } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useShoppingCart } from 'use-shopping-cart'

export default function Navigater() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const menuItems = ['Women', 'Men', 'Teen'] // 'Log In', 'Sign Up'
  const navLinks = [
    {
      link: '/',
      name: 'Home'
    },
    {
      link: '/Women',
      name: 'Women'
    },
    {
      link: '/Men',
      name: 'Men'
    },
    {
      link: '/Teen',
      name: 'Teens'
    }
  ]

  const { handleCartClick } = useShoppingCart()

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='z-[1000]'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand as={Link} href='/'>
          <AcmeLogo />
          <p className='text-2xl font-bold text-[#100792]'>Jewels</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        {navLinks.map((navLink, index) => {
          if (pathname === navLink.link) {
            return (
              <NavbarItem key={index} isActive>
                <Link href={`${navLink.link}`} color='primary'>
                  {navLink.name}
                </Link>
              </NavbarItem>
            )
          } else {
            return (
              <NavbarItem key={index}>
                <Link href={`${navLink.link}`} color='foreground'>
                  {navLink.name}
                </Link>
              </NavbarItem>
            )
          }
        })}
      </NavbarContent>
      <NavbarContent justify='end'>
        {/* <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Login
          </Button>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            color='primary'
            variant='flat'
            onClick={() => handleCartClick()}
          >
            <ShoppingBasket />
            <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
              Cart
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full hover:text-blue-600 ${
                pathname === item ? 'text-blue-700 underline' : 'text-slate-50'
              }`}
              href={`/${item}`}
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
