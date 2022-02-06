/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import { getContentPages, getPageContent } from 'lib/content'
import Seo from 'components/seo'
import Alert from 'components/alert'
import Button from 'components/button'
import React from 'react'
import Link from 'next/link'

type Props = {
  title: string
  summary: string
  image: string
  slug: string
  mdx: any
}

function MDXLink({ href, ...props }: React.ComponentProps<'a'>) {
  try {
    const url = new URL(href || '')
    return (
      <a
        {...props}
        target={url.hostname === 'asdi.vercel.app' ? '_self' : '_blank'}
      />
    )
  } catch (error) {
    // absolute url
    return (
      <Link href={href!}>
        <a {...props} />
      </Link>
    )
  }
}

function Page({ title, image, summary, mdx }: Props) {
  return (
    <>
      <h1 className="text-center">{title}</h1>
      <img src={image} alt="" />
      <Seo description={summary} image={image} title={title} />
      <MDXRemote {...mdx} components={{ Alert, Button, a: MDXLink }} />
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
