import ExternalLink from "./ExternalLink"

const Footer = () => {
  return (
    <footer className='mt-10 py-4 border-t-4 border-yellow'>
      <div className="container md:flex mx-auto justify-between">
        <div className="text-center text-sm text-grey font-semibold">
          Built with
          <i><ExternalLink className='mx-1 text-yellow' href='https://nextjs.org/'>Nextjs</ExternalLink></i>
          and
          <i><ExternalLink className="mx-1 text-yellow" href='https://tailwindcss.com/'>TailwindCss</ExternalLink></i>.
          The source code can be found 
          <i><ExternalLink className="mx-1 text-yellow uppercase" href='https://github.com/tminhduc2811/me-myself-n-i'>here</ExternalLink></i>
        </div>
        <div className="text-center text-sm text-grey">
          Copyright © 2021 Duc Ta. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer