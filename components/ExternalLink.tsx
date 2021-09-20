import PropTypes from 'prop-types'

const ExternalLink = ({ children, href, className, ...others }) => {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" {...others}>{children}</a>
  )
}

ExternalLink.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default ExternalLink