import Layout from '@/components/layout';
import BackToProjects from '@/components/backToProjects';
import PageHeader from '@/components/pageHeader';

const LayoutProject = ({
  children,
  title,
  subtitle,
  projectRole,
  backLink,
}) => (
  <Layout>
    {backLink && <BackToProjects />}
    {title && (
      <PageHeader title={title} subtitle={subtitle} projectRole={projectRole} />
    )}
    <div className="prose lg:prose-lg prose-headings:font-semibold mt-44">
      {children}
    </div>
  </Layout>
);

export default LayoutProject;
