import Layout from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import cyber from '@/assets/images/projects/cyber.png';
import emulsify from '@/assets/images/projects/emulsify.png';
import podcast from '@/assets/images/projects/podcast.png';
import wutsai from '@/assets/images/projects/wutsai.png';
import bitd from '@/assets/images/projects/bitd.png';
import bnm from '@/assets/images/projects/bnm.png';
import fate from '@/assets/images/projects/fate.png';
import yaleds from '@/assets/images/projects/yaleds.png';
import nyu from '@/assets/images/projects/nyu.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/pro-regular-svg-icons';

const ProjectCard = ({
  title,
  role,
  description,
  imageSrc,
  url = '/',
  variants,
  size,
}) => (
  <motion.article
    className="md:flex md:flex-row md:gap-8 items-start"
    variants={variants}
  >
    <Link
      href={url}
      className="md:shrink-0 md:grow-0 md:basis-[150px] float-end md:float-none"
    >
      <Image
        src={imageSrc}
        alt={title}
        className="max-w-[100px] w-[100px] md:max-w-[150px] md:w-full"
      />
    </Link>

    <div>
      <h2 className="text-2xl font-semibold mb-2 leading-tight text-balance group">
        <Link href={url} className="transition-all group-hover:text-sky-600">
          {title}{' '}
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="text-xl transition-all group-hover:ml-2 group-hover:text-sky-600"
          />
        </Link>
      </h2>
      <p className="text-sm text-slate-600">Role: {role}</p>
      <p className="mt-4">{description}</p>
    </div>
  </motion.article>
);

const projects = [
  {
    title: 'All new Yale sites use the design system I crafted',
    role: 'Creative Director',
    description:
      'Yale has more than a thousand websites, and now, with its first digital design system, it can keep them all on brand.',
    imageSrc: yaleds,
    url: '/projects/yale-ds',
  },
  {
    title:
      'Emulsify is the go-to design system solution for hundreds of designer and developer teams working on Drupal sites',
    role: 'Product Lead',
    description:
      'I guide the strategic vision for the project, ensuring its alignment with the evolving needs of the Drupal community.',
    imageSrc: emulsify,
    url: '/projects/emulsify',
  },
  {
    title: 'Wu Tsai Institute design lost a Webby to Spotify',
    role: 'Creative Director',
    description:
      'Connecting neuroscience and data science to accelerate breakthroughs in understanding cognition.',
    imageSrc: wutsai,
    url: 'projects/wti',
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
    title: 'Yale Cybersecurity—make boring things exciting',
    role: 'Designer',
    description:
      'Making a department of NO into a department of KNOW. Cybersecurity is cool!',
    imageSrc: cyber,
    url: 'projects/cybersecurity',
  },
  {
    title:
      'Bits and Mortar ensures that every tabletop game store can deliver files to their customers',
    role: 'Product Designer and Developer',
    description:
      'When someone buys a tabletop roleplaying game—like Dungeons and Dragons—from any local game store worldwide, we send them a PDF.',
    imageSrc: bnm,
    url: 'projects/bits-and-mortar',
  },
  {
    title: 'Design in Good Company podcast',
    role: 'Host',
    description:
      'A podcast about design, leadership, and the power of community.',
    imageSrc: podcast,
    url: 'projects/podcast',
  },
];

const smallerProjects = [
  {
    title: 'Fate SRD, a digital rules reference for the Fate RPG',
    role: 'Owner',
    description:
      'Won a silver ENNIE for Best Website in 2014. The site is used by thousands of players and GMs every month.',
    imageSrc: fate,
    url: 'https://fate-srd.com/',
  },
  {
    title:
      'Blades in the Dark SRD, a digital rules reference for the Blades in the Dark RPG',
    role: 'Owner',
    description:
      'Won a gold ENNIE for Best Website in 2018. The site is used by thousands of players and GMs every month.',
    imageSrc: bitd,
    url: 'https://bladesinthedark.com/',
  },
];

export default function Projects() {
  const projectsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.125,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: '-50px' },
    show: { opacity: 1, x: 0 },
  };

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-normal mb-24">
        <span className="block">Projects</span>
      </h1>

      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24"
        variants={projectsContainer}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} variants={item} />
        ))}
      </motion.section>

      <h2 className="text-2xl font-semibold mb-8">Hobby projects</h2>
      <section className="grid grid-cols-1 gap-16 max-w-[700px]">
        {smallerProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout pageTitle="Projects">{page}</Layout>;
};
