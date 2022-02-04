import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'

async function getContentPages() {
  const projects = await fs.promises.readdir('content')
  return projects
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.toLowerCase().replace('.mdx', ''))
}

async function getPageContent(slug: string) {
  const { content, data } = matter(
    await fs.promises.readFile(path.join('content', `${slug}.mdx`))
  )
  const mdx = await serialize(content, { scope: data })

  return { ...data, slug, mdx } as {
    mdx: typeof mdx
    title: string
    summary: string
    featured: string
    image: string
    slug: string
  }
}

export { getPageContent, getContentPages }
