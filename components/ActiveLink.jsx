import classnames from "classnames"
import { useRouter } from "next/dist/client/router"
import Link from 'next/link'

const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter()
  const isActive = asPath === props.href || asPath === props.as
  const classNames = classnames(
    'px-2 py-4 uppercase transition-colors duration-150',
    {
      'text-yellow': isActive,
      'text-grey text-opacity-90 hover:text-white': !isActive
    }
  )
  return (
    <Link {...props} passHref>
      <a className={classNames}>{children}</a>
    </Link>
  )
}

export default ActiveLink