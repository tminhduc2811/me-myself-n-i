import Image from 'next/image'
import PropTypes from 'prop-types'
import Link from 'next/link'

export interface PostInterface {
  image: string
  blurDataURL: string
  href: string
  title: string
  description: string
}

const Post = ({ meta }) => {

  const { href, title, description, image, blurDataURL } = meta

  return (
    <div className="flex flex-col bg-[#151A22] rounded-xl shadow-xl mt-4 mx-2 hover:bg-[#212529] transition-colors duration-300 lg:flex-row overflow-hidden">
      <Link href={href} passHref>
        <a className="h-52 w-auto lg:w-4/5 xl:w-1/3 lg:h-auto relative">
          <Image className='inset-0 object-cover object-center' src={image} alt={title} layout='fill' placeholder='blur' blurDataURL={blurDataURL} />
        </a>
      </Link>
      <div className="w-full py-4 px-3 text-grey flex flex-col justify-between ">
        <Link href={href} passHref>
          <a>
            <h3 className='link'>
              {title}
            </h3>
          </a>
        </Link>
        <p className="mt-2">
          {description}
        </p>
        <Link href={href} passHref>
          <a>
            <p className="mt-2 text-yellow">Read more</p>
          </a>
        </Link>
      </div>
    </div>
  )
}

Post.propTypes = {
  meta: PropTypes.object
}

export default Post