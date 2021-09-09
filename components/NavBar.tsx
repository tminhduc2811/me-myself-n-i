import Image from "next/image"
import Link from 'next/link'
import ActiveLink from "./ActiveLink"

const NavBar = () => {
  return (
    <header className="font-default">
      <div className="container mx-auto px-5 lg:px-40">
        <nav className="flex flex-col justify-between sm:flex-row">
          <div className="flex justify-center px-2 py-4 font-semibold">
            <Link href='/'>
              <span>
                <Image width="30" height="30" className="rounded-full cursor-pointer" src="/images/bigbro.png" alt="avatar" />
              </span>
            </Link>
            <div className="flex flex-col py-4 px-4 text-yellow text-xl h-8 justify-center">
              ducta
            </div>
          </div>
          <div className="flex justify-center font-semibold text-xl">
            <ActiveLink href='/'>Home</ActiveLink>
            {/* <ActiveLink href='blog'>Blog</ActiveLink> */}
            <ActiveLink href='/contact'>Contact</ActiveLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar