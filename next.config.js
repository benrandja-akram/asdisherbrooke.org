const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            remarkPlugins: [
              require('remark-frontmatter'),
              require('remark-mdx-frontmatter'),
            ],
          },
        },
      ],
    })

    return config
  },
}
module.exports = withBundleAnalyzer(config)
