
const HeadingLink = ({ children, level }) => {

  const hash = children.toString().toLowerCase().replace(" ", "-")
  const Tag = 'h' + level as keyof JSX.IntrinsicElements
  const tagClassName = level < 3 ? 'border-b-[1px] border-grey border-opacity-25 my-2 pb-2' : 'my-2'

  return (
    <>
      <Tag id={hash} className={tagClassName}>{children}</Tag>
    </>
  )
}

export default HeadingLink