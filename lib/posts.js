//@ts-check
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { sortByDate } from '@/utils/index'

const files = fs.readdirSync(path.join('posts'))

export function getPosts() {
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return posts.sort(sortByDate)
}
