import Image from "next/image"
import Link from 'next/link'
import { useCallback, useEffect, useState } from "react"
import ActiveLink from "./ActiveLink"
import BurgerButton from "./BurgerButton"

const NavBar = () => {

  const [isActive, setActive] = useState(false)
  const [navState, setNavState] = useState('absolute')

  const handleScroll = () => {
    const offset = window.pageYOffset
    if (offset >= 180 && navState !== 'in-view') {
      setNavState('in-view')
    } else if (offset < 180 && offset > 120 && navState !== 'sticky') {
      setNavState('sticky')
    } else if (offset < 110 && navState !== '') {
      setNavState('absolute')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const toggleNav = useCallback(() => {
    setActive(!isActive)
  }, [isActive])

  const closeNav = useCallback(() => {
    setActive(false)
  }, [])

  return (
    <div className="h-[68px]">
      <header className={`font-default w-full bg-[#151A22] z-2000 transition-all ease-in-out duration-700 ${navState}`}>
        <div className="container mx-auto px-5 lg:px-40">
          <nav className="flex flex-col justify-between md:flex-row">
            <div className="flex justify-center px-2 py-4 font-semibold">
              <div className="flex justify-between w-full">
                <div className="flex">
                  <Link href='/'>
                    <span>
                      <Image width="30" height="30" className="rounded-full cursor-pointer" src="/images/bigbro.png" alt="avatar" />
                    </span>
                  </Link>
                  <Link href='/'>
                    <a className="flex flex-col py-4 px-4 text-yellow text-xl h-8 justify-center">ducta</a>
                  </Link>
                </div>
                <BurgerButton isActive={isActive} toggle={toggleNav} />
              </div>
            </div>
            <div className={`flex flex-col text-center justify-center font-semibold text-xl nav-items md:border-none md:flex-row md:max-h-300 ${isActive ? 'show' : ''}`}>
              <ActiveLink href='/' onClick={closeNav}>Home</ActiveLink>
              <ActiveLink href='/blog' onClick={closeNav}>Blog</ActiveLink>
              <ActiveLink href='/contact' onClick={closeNav}>Contact</ActiveLink>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar