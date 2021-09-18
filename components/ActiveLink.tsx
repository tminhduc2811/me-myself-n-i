import classnames from "classnames"
import { useRouter } from "next/dist/client/router"
import Link from 'next/link'
import PropTypes from 'prop-types'

const ActiveLink = ({ children, href, onClick, ...props }) => {
  const { asPath } = useRouter()
  const isActive = asPath === href || asPath === props.as
  const classNames = classnames(
    'px-2 py-4 uppercase transition-colors duration-150',
    {
      'text-yellow': isActive,
      'text-grey text-opacity-90 hover:text-white': !isActive
    }
  )
  return (
    <Link href={href} passHref>
      <a className={classNames} onClick={onClick}>{children}</a>
    </Link>
  )
}

ActiveLink.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default ActiveLink