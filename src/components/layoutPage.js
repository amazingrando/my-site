import Layout from '@/components/layout';
import PageHeader from '@/components/pageHeader';

const LayoutPage = ({ children, title, subtitle }) => (
  <Layout pageTitle={title}>
    {title && <PageHeader title={title} subtitle={subtitle} />}
    <div className="prose lg:prose-lg prose-headings:font-semibold prose-strong:text-slate-600 prose-headings:text-slate-700 prose-li:marker:text-slate-600 mt-44">
      {children}
    </div>
  </Layout>
);

export default LayoutPage;
