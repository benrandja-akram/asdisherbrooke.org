/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import { getContentPages, getPageContent } from 'lib/content'
import Seo from 'components/seo'

type Props = {
  title: string
  summary: string
  image: string
  slug: string
  mdx: any
}

function Page({ title, image, summary, slug, mdx }: Props) {
  return (
    <>
      <p>{slug}</p>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <Seo description={summary} image={image} title={title} />
      <MDXRemote {...mdx} />
    </>
  )
}

Page.layoutProps = { variant: 'content' }
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: { ...(await getPageContent(ctx.params!.slug as string)) },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getContentPages()
  return {
    paths: projects.map((file) => ({ params: { slug: file } })),
    fallback: false,
  }
}
export default Page
