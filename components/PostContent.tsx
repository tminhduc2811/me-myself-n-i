import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"
import PropTypes from 'prop-types'
import Link from 'next/link'
import HeadingLink from "./HeadingLink"
import remarkToc from "remark-toc"

const PostContent = ({ content, meta }) => {
  return (
    <article className="article">
      <HeadingLink level={1}>{meta.title}</HeadingLink>
      <p>{meta.description}</p>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[rehypeRaw]}
        transformImageUri={(src) => {
          // transform the uri of images
          return src.replace('/public', '')
        }}
        components={{
          code({ className, children }) {
            const language = className ? className.replace("language-", "") : 'js'
            return (
              <SyntaxHighlighter
                style={dracula}
                language={language}
              >
                {children[0]}
              </SyntaxHighlighter>
            )
          },
          img: (img) => {
            const { src, alt, width, height } = img
            if (src) {
              return (
                <Image src={src} alt={alt} width={width} height={height} />
              )
            }
            return (
              <Image src={'placeholder'} alt={alt} width={width} height={height} />
            )
          },
          a: (a) => {
            const { href, children } = a
            return (
              <Link href={href!} passHref>
                <a>{children}</a>
              </Link>
            )
          },
          h2: ({ children, level }) => {
            return (
              <HeadingLink level={level}>
                {children}
              </HeadingLink>
            )
          },
          h3: ({ children, level }) => {
            return (
              <HeadingLink level={level}>
                {children}
              </HeadingLink>
            )
          },
          h4: ({ children, level }) => {
            return (
              <HeadingLink level={level}>
                {children}
              </HeadingLink>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}

PostContent.propTypes = {
  /**
   * Markdown content as string
   */
  content: PropTypes.string.isRequired,
  meta: PropTypes.object
}

export default PostContent