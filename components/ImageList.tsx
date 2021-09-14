import PropTypes from 'prop-types'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import { CAROUSEL_RESPONSIVE } from '../constants'

const ImageList = ({ images, imgClassName }) => {
  return (
    <Carousel responsive={CAROUSEL_RESPONSIVE} renderDotsOutside ssr>
      {images.map((image, index) => <Image key={index} className={imgClassName} {...image} />)}
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