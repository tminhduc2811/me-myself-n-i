const ExternalLink = ({ children, href, className }) => {
  return (
    <a href={href} className={className} target="_blank">{children}</a>
  )
}
export default ExternalLink