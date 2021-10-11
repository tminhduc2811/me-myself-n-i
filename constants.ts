const CAROUSEL_RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 3
  }
}

const SKILL_IMAGES = [
  {
    src: '/images/js.png',
    width: 100,
    height: 100,
    alt: 'javascript',
    priority: true
  },
  {
    src: '/images/ts.png',
    width: 100,
    height: 100,
    alt: 'typescript',
    priority: true
  },
  {
    src: '/images/go.png',
    width: 100,
    height: 100,
    alt: 'golang',
    priority: true
  },
  {
    src: '/images/java.png',
    width: 100,
    height: 100,
    alt: 'java',
    priority: true
  },
  {
    src: '/images/react.png',
    width: 100,
    height: 100,
    alt: 'reactjs',
    priority: true
  },
  {
    src: '/images/vue.png',
    width: 100,
    height: 100,
    alt: 'vuejs',
    priority: true
  },
  {
    src: '/images/spring.jpg',
    width: 100,
    height: 100,
    alt: 'spring boot',
    priority: true
  }
]

const POSTS_PATH = 'posts'

const MD_REGEX = /\.md?$/

export {
  CAROUSEL_RESPONSIVE,
  SKILL_IMAGES,
  POSTS_PATH,
  MD_REGEX
}