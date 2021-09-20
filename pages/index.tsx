import Image from "next/image"
import { SocialIcon } from 'react-social-icons'
import ImageList from '../components/ImageList'
import { SKILL_IMAGES } from '../constants'

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container py-28 sm:py-36 mx-auto px-5 lg:px-40">
          <div className='lg:w-3/4 text-center sm:text-left'>
            <p className='text-xl text-white'>{`👋 Hi there. I'm Duc`}</p>
            <p className='text-white text-2xl pt-5 font-medium sm:text-4xl'>{`I'm working as a `}<span className='text-yellow font-semibold'>full-stack</span> developer. I like to create amazing stuff with web technologies.</p>
            <button className="bg-grey text-xl mt-5 px-5 py-2 rounded-xl hover:bg-yellow transition-colors duration-300">Contact me</button>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-6 lg:px-40">
        <div className="text-center">
          <h2 className='text-white text-2xl mb-8 font-medium sm:text-4xl pb-5'>Familiar with</h2>
          <ImageList imgClassName='card-img' images={SKILL_IMAGES} />
        </div>
      </section>
      <section className="hero-section-2 mt-6">
        <div className='container mx-auto pt-1 lg:px-40 text-center'>
          <h2 className='text-white text-2xl mt-8 font-medium sm:text-4xl'>What I do</h2>
          <div className="md:flex">
            <div className='h-full self-center'>
              <Image src='/images/website-illustration.svg' width='440' height='300' alt='website creator' />
            </div>
            <div className="flex-1 w-full md:text-left md:py-20">
              <p className="text-white text-lg p-3 md:text-xl">Well, mostly everything related to <span className='text-yellow'>Web Development</span>{`. Btw, I'm usually open for freelance, remote, or part-time jobs, so don't hesitate to contact me if you're interested in my work.`}</p>
            </div>
          </div>
        </div>
      </section>
      <section className='text-center mt-6'>
        <h2 className='text-white text-2xl font-medium sm:text-4xl'>Find me on</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <SocialIcon className='mx-4 hover:-translate-y-1 transition-all ease-in-out duration-300' url='https://github.com/tminhduc2811' title='Github' bgColor='white' />
          <SocialIcon className='mx-4 hover:-translate-y-1 transition-all ease-in-out duration-300' url='https://www.linkedin.com/in/ducta2811/' title='LinkedIn' fgColor='white' />
          <SocialIcon className='mx-4 hover:-translate-y-1 transition-all ease-in-out duration-300' url='https://twitter.com/ducta2811' title='Twitter' fgColor='white' />
          <SocialIcon className='mx-4 hover:-translate-y-1 transition-all ease-in-out duration-300' url='mailto:tminhduc2811@gmail.com' title='Email' bgColor='white' />
        </div>
      </section>
    </>
  )
}

export default HomePage