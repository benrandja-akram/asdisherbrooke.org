import Head from 'next/head'

interface Props {
  title: string
  description?: string
  image: string
}
const Seo: React.FC<Props> = ({ title, description, image }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:title" content={title} />
    {description && <meta name="description" content={description} />}
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content={'400'} />
    <meta property="og:image:height" content={'600'} />
  </Head>
)

export default Seo
