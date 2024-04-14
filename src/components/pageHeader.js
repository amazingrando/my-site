const PageHeader = ({ title, projectRole, subtitle }) => (
  <>
    <h1 className="text-4xl md:text-6xl font-normal mb-4 max-w-4xl text-balance">
      {title}
    </h1>
    {subtitle && <h2 className="text-2xl text-slate-500 mb-8">{subtitle}</h2>}
    {projectRole && <h2 className="text-xl">Role: {projectRole}</h2>}
  </>
);

export default PageHeader;
