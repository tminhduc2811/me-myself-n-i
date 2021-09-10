import ExternalLink from "../components/ExternalLink"

const ContactPage = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto relative pt-5 lg:px-40 text-center">
          <h2 className='text-white text-2xl my-8 font-medium sm:text-4xl'>The site is under development and will be finished soon...</h2>
          <p className='text-white text-xl'>The source code can be found at
            <ExternalLink className='pl-1 text-yellow' href="https://github.com/tminhduc2811/me-myself-n-i" rel='nofollow'>HERE</ExternalLink>
          </p>
        </div>
      </section>
    </div>
  )
}

export default ContactPage