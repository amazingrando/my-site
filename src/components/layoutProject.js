import Layout from '@/components/layout';
import BackToProjects from '@/components/backToProjects';
import PageHeader from '@/components/pageHeader';

const LayoutProject = ({
  children,
  title,
  subtitle,
  projectRole,
  backLink,
  links,
}) => (
  <Layout>
    {backLink && <BackToProjects />}
    {title && (
      <PageHeader
        title={title}
        subtitle={subtitle}
        projectRole={projectRole}
        links={links}
      />
    )}
    <div className="prose lg:prose-lg prose-headings:font-semibold prose-strong:text-slate-600 prose-headings:text-slate-700 prose-li:marker:text-slate-600 mt-44">
      {children}
    </div>
  </Layout>
);

export default LayoutProject;
