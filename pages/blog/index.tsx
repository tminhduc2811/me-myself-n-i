import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import { POSTS_PATH } from '../../constants'
import matter from 'gray-matter'
import Post from '../../components/Post'

const PostsPage = ({ blogs }) => {
  return (
    <>
      <h1 className="text-grey text-center mt-6">Recent Posts</h1>
      <div className="container py-28 sm:py-36 mx-auto px-5 lg:px-52 xl:px-72 flex flex-col">
        {
          blogs.map(post => <Post key={post.href} meta={post} />)
        }
      </div>
    </>
  )
}

export const getStaticProps = async () => {

  // get all .md files
  const blogs = fs.readdirSync(POSTS_PATH)
    .map(fileName => {
      const markdown = fs.readFileSync(
        path.join(POSTS_PATH, fileName),
        'utf-8'
      )

      const { data } = matter(markdown)
      return {
        ...data,
        href: `/blog/${fileName.replace(/\.md?$/, '')}`
      }
    })

  // 
  return {
    props: {
      blogs
    }
  }
}

export default PostsPage