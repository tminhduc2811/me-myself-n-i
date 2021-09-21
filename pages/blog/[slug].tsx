import PostContent from "../../components/PostContent"
import fs from 'fs'
import path from "path"
import { POSTS_PATH } from "../../constants"
import matter from 'gray-matter'
import { NextSeo } from 'next-seo'

const PostDetails = ({ content, meta }) => {
  const { title, description, image } = meta
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [{
            url: image,
            width: 1200,
            height: 630
          }]
        }}
      />
      <PostContent meta={meta} content={content} />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const fileName = `${params.slug}.md`

  const markdown = fs.readFileSync(
    path.join(POSTS_PATH, fileName),
    'utf-8'
  )

  const { data, content } = matter(markdown)

  return {
    props: {
      meta: data,
      content
    }
  }
}

export const getStaticPaths = async () => {
  const paths = fs.readdirSync(POSTS_PATH)
    .map(path => path.replace(/\.md?$/, ''))
    .map(slug => ({ params: { slug } }))

  return { paths, fallback: false }
}

export default PostDetails