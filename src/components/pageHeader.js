const PageHeader = ({ title, projectRole }) => (
  <>
    <h1 className="text-4xl md:text-6xl font-normal mb-4 max-w-4xl text-balance">
      {title}
    </h1>
    {projectRole && <h2 className="text-2xl">Role: {projectRole}</h2>}
  </>
);

export default PageHeader;
