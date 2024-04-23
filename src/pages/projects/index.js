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
// import yaleds from '@/assets/images/projects/yaleds.png';
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
      <p className="mt-8">{description}</p>
    </div>
  </motion.article>
);

const projects = [
  // {
  //   title: "Yale's first design system",
  //   role: 'Creative Director',
  //   description:
  //     'Led the design team to create Yale’s first digital design system, which is used on all new websites.',
  //   imageSrc: yaleds,
  //   url: '/projects/yale-ds',
  // },
  {
    title: 'Design in Good Company podcast',
    role: 'Host',
    description:
      'A podcast about design, leadership, and the power of community.',
    imageSrc: podcast,
    url: 'projects/podcast',
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
    title: 'Wu Tsai Institute lost a Webby to Spotify',
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
    title: 'Yale Cybersecurity—make boring things interesting',
    role: 'Designer',
    description:
      'Making a department of NO into a department of KNOW. Cybersecurity is cool, right?',
    imageSrc: cyber,
    url: 'projects/cybersecurity',
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
  {
    title:
      'Bits and Mortar, supporting local game stores with digital downloads',
    role: 'Designer and developer',
    description:
      'Bringing the physical and digital worlds together so people can support their Friendly Local Gaming Store while keeping up-to-date with their digital collection.',
    imageSrc: bnm,
    url: 'https://www.bits-and-mortar.com/',
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

      <h2 className="text-2xl font-semibold mb-8">Other projects</h2>
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
