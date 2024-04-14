import Layout from '@/components/layout';
import Link from 'next/link';
import BackToProjects from '@/components/backToProjects';
import PageHeader from '@/components/pageHeader';

export default function Page() {
  return (
    <>
      <BackToProjects />

      <PageHeader
        title="Reinventing the public health paradigm with NYU"
        projectRole="Designer"
      />

      <div className="prose lg:prose-lg mt-44">
        <p className="lead">
          NYU College of Global Public Health (CGPH) wanted to rebuild their
          site from the ground up with a focus on the following key things:
        </p>
        <ul>
          <li>
            Showcase the energy, ambition, and multi-disciplinary nature of of
            CGPH
          </li>
          <li>Provide an easy-to-use experience on all devices</li>
          <li>
            Use a component-driven design process to allow flexible content
            creation within a defined system.
          </li>
        </ul>
        <p>
          NYU GPH aimed to express its uniqueness from other NYU schools through
          its visual language. With the energy and spirit of a startup, the
          young and vibrant team, led by a content and marketing-focused team,
          embraced a design system that included large, powerful images and bold
          typography. I spent the better part of a month working on mood boards
          with them, exploring options until we landed on one that was just
          right.
        </p>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
