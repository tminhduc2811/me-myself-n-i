import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"
import PropTypes from 'prop-types'

const PostContent = ({ content }) => {
  return (
    <article className="article">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
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
  content: PropTypes.string.isRequired
}

export default PostContent