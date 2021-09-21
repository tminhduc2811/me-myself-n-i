import PropTypes from 'prop-types'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import { CAROUSEL_RESPONSIVE } from '../constants'

interface ImageProps {
  src: string
  width: number
  height: number
  alt: string
  priority?: boolean
}

const ImageList = ({ images, imgClassName }: { images: ImageProps[], imgClassName?: string }) => {
  return (
    <Carousel responsive={CAROUSEL_RESPONSIVE} renderDotsOutside ssr>
      {images.map((image, index) => <Image key={index} className={imgClassName} {...image} alt={image.alt} />)}
    </Carousel>

  )
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
    priority: PropTypes.bool
  })).isRequired,
  imgClassName: PropTypes.string,
}

export default ImageList