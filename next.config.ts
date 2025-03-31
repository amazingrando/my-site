import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/plus-assets/**',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  async redirects() {
    return [
      {
        source: '/chat',
        destination: 'https://calendar.app.google/VyrhtubexFo5D6Gu6',
        permanent: true,
      },
    ]
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  }
})

export default withMDX(nextConfig)
