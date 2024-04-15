import Layout from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import cyber from '@/assets/images/projects/cyber.png';
import emulsify from '@/assets/images/projects/emulsify.png';
import podcast from '@/assets/images/projects/podcast.png';
import wutsai from '@/assets/images/projects/wutsai.png';
import yaleds from '@/assets/images/projects/yaleds.png';
import nyu from '@/assets/images/projects/nyu.png';

const ProjectCard = ({ title, role, description, imageSrc, url = '/' }) => (
  <article className="flex flex-row gap-8 items-center">
    <Link href={url} className="shrink-0 grow-0 basis-[200px]">
      <Image src={imageSrc} alt={title} className="max-w-[200px] w-full" />
    </Link>

    <div>
      <h2 className="text-2xl font-semibold mb-2 leading-tight text-balance">
        <Link href={url} className="transition-all hover:text-sky-600">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-slate-600">Role: {role}</p>
      <p className="mt-8">{description}</p>
    </div>
  </article>
);

const projects = [
  {
    title: "Yale's first design system",
    role: 'Creative Director',
    description:
      'Led the design team to create Yale’s first digital design system, which is used on all new websites.',
    imageSrc: yaleds,
    url: '/projects/yale-ds',
  },
  {
    title: 'Reinventing the public health paradigm with NYU',
    role: 'Designer',
    description:
      'This website redesign revolutionized the digital footprint of the school, capturing its vibrant energy while enhancing the user experience.',
    imageSrc: nyu,
    url: '/projects/nyu',
  },
  {
    title: 'Wu Tsai Institute lost a Webby to Spotify',
    role: 'Creative Director',
    description:
      'Connecting neuroscience and data science to accelerate breakthroughs in understanding cognition.',
    imageSrc: wutsai,
    url: 'projects/wti',
  },
  {
    title: 'Emulsify Design System for Figma and Drupal',
    role: 'Project Lead',
    description:
      'I guide the strategic vision for the project, ensuring its alignment with the evolving needs of the Drupal community.',
    imageSrc: emulsify,
    url: '/projects/emulsify',
  },
  {
    title: 'Yale Cybersecurity—make boring things interesting',
    role: 'Designer',
    description:
      'Making a department of NO into a department of KNOW. Cybersecurity is cool, right?',
    imageSrc: cyber,
    url: 'projects/cybersecurity',
  },
  {
    title: 'Design in Good Company podcast',
    role: 'Host',
    description:
      'Coming soon! A podcast about design, leadership, and the power of community.',
    imageSrc: podcast,
    url: 'projects/podcast',
  },
  // {
  //   title: 'Decoupled Days 2022 organizer',
  //   role: 'Organizer',
  //   description:
  //     'And like that the reign of the Sorcier came to a close thanks to the Gunpowder Revolution.',
  // },
  // {
  //   title:
  //     'A successful Kickstarter that funded in 4 hours and delivered to backers early',
  //   role: 'Publisher',
  //   description:
  //     'And like that the reign of the Sorcier came to a close thanks to the Gunpowder Revolution.',
  // },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-normal mb-24">
        <span className="block">Projects</span>
      </h1>

      <section className="grid grid-cols-2 gap-24 mb-24">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
