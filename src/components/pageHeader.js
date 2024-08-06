import * as Fathom from 'fathom-client';

const PageHeader = ({ title, projectRole, subtitle, links }) => (
  <div className="max-w-4xl">
    <h1 className="text-4xl md:text-6xl font-normal mb-4 text-balance">
      {title}
    </h1>
    {subtitle && (
      <h2 className="text-2xl text-slate-500 text-balance mb-8">{subtitle}</h2>
    )}
    {projectRole && <h2 className="text-xl">Role: {projectRole}</h2>}
    {links && (
      <ul className="mt-4">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={link.url}
              className="hover:text-sky-600 transition-all underline"
              onClick={() => {
                Fathom.trackEvent(`Project link: ${link.text}`);
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default PageHeader;
