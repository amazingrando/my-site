export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  
  const content = await import(`../../../content/${slug}.mdx`)
  
  const Content = content.default
  const frontmatter = content.frontmatter

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-8 lg:px-16">
      <header className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-balance">
          {frontmatter.title}
        </h1>
        {frontmatter.subtitle && (
          <h2 className="text-2xl text-ash-700 text-balance mb-8 font-medium">{frontmatter.subtitle}</h2>
        )}
        {frontmatter.projectRole && (
          <p className="text-xl">
            <span className="font-medium">Role:</span> {frontmatter.projectRole}
          </p>
        )}
        {frontmatter.links && frontmatter.links.length > 0 && (
          <nav aria-label="Page links" className="mt-4">
            <ul className="flex flex-wrap gap-4">
              {frontmatter.links.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.url}
                    className="hover:text-blue-600 hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <main className="prose lg:prose-lg prose-headings:font-semibold prose-strong:text-slate-600 prose-headings:text-slate-700 prose-li:marker:text-slate-600 mt-24 lg:mt-44 pb-44">
        <Content />
      </main>
    </div>
  )
}