import Carousel from 'react-multi-carousel'
import Image from "next/image"
import ExternalLink from '../components/ExternalLink'

const responsive = {
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

export default function Home() {
  return (
    <>      
      <section className="hero-section">
        <div className="container relative py-28 sm:py-36 mx-auto px-5 lg:px-40">
          <div className='lg:w-3/4 text-center sm:text-left'>
            <p className='text-xl text-white'>👋 Hi there. I'm Duc</p>
            <p className='text-white text-2xl pt-5 font-medium sm:text-4xl'>I'm working as a <span className='text-yellow font-semibold'>full-stack</span> developer. I like to create amazing stuff with web technologies.</p>
            <button className="bg-grey text-xl mt-5 px-5 py-2 rounded-xl hover:bg-yellow transition-colors duration-300">Contact me</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto relative pt-5 lg:px-40">
          <div className="text-center">
            <h2 className='text-white text-2xl my-8 font-medium sm:text-4xl'>Familiar with</h2>
            <Carousel responsive={responsive} renderDotsOutside ssr infinite>
              <Image className='card-img' src="/images/js.png" height='100' width='100' alt="javascript" />
              <Image className='card-img' src="/images/ts.png" height='100' width='100' alt="typescript" />
              <Image className='card-img' src="/images/go.png" height='100' width='100' alt="golang" />
              <Image className='card-img' src="/images/java.png" height='100' width='100' alt="java" />
              <Image className='card-img' src="/images/react.png" height='100' width='100' alt="reactjs" />
              <Image className='card-img' src="/images/vue.png" height='100' width='100' alt="vuejs" />
              <Image className='card-img' src="/images/spring.jpg" height='100' width='100' alt="spring boot" />
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto relative pt-5 lg:px-40 text-center">
          <h2 className='text-white text-2xl my-8 font-medium sm:text-4xl'>The site is under development and will be finished soon...</h2>
          <p className='text-white text-xl'>The source code can be found at
          <ExternalLink className='pl-1 text-yellow' href="https://github.com/tminhduc2811/me-myself-n-i">HERE</ExternalLink> 
          </p>
        </div>
      </section>
    </>
  )
}
