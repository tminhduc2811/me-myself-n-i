import ReactMarkdown from "react-markdown"
import fs from 'fs'
import path from "path"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import Image from 'next/image'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const Test = ({ content }) => {

  return (
    <article className="article">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ node, children }) => {
            if (node.children[0].tagName === 'image') {
              const image = node.children[0]
              return (
                <div className="container">
                  <Image src={image.properties.src} alt={image.properties.alt} layout='responsive' className="mx-auto" />
                </div>
              )
            }
            return <p>{children}</p>
          },
          code({ className, children }) {
            const language = className ? className.replace("language-", "") : 'js'
            return (
              <SyntaxHighlighter
                style={atomDark}
                language={language}
                children={children[0]}
              />
            )
          },
          img: ({ node }) => {
            const properties = node.properties
            return (
              <Image {...properties} />
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}

export async function getStaticProps() {
  const markdown = fs.readFileSync(
    path.join('posts', 'test.md'),
    'utf-8'
  )
  return {
    props: {
      content: markdown,
    }
  }
}

export default Test