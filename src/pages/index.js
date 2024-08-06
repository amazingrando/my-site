import { motion } from 'framer-motion';
import Layout from '@/components/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/pro-regular-svg-icons';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: '-50px' },
    show: { opacity: 1, y: 0 },
  };

  const list = {
    visible: { opacity: 1, transition: { delay: 0.4 } },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="text-4xl md:text-6xl font-normal mb-24 max-w-2xl"
      >
        <motion.span variants={item} className="block">
          I create <strong className="font-semibold">design systems</strong> and{' '}
          <strong className="font-semibold">products</strong> to make businesses
          better
        </motion.span>
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={list}
        className="text-xl md:text-2xl mb-16 max-w-lg"
      >
        My goal is to make the online world as approachable, understandable, and
        delightful as the real world.
      </motion.p>

      <motion.nav
        initial="hidden"
        animate="visible"
        variants={list}
        className="text-xl md:text-2xl"
      >
        <ul className="space-y-4">
          <li>
            <Link
              href="projects"
              className="hover:text-sky-600 flex flex-row items-center gap-2 transition-all hover:gap-3"
            >
              Select projects
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
          <li>
            <Link
              href="principles"
              className="hover:text-sky-600 flex flex-row items-center gap-2 transition-all hover:gap-3"
            >
              Principles
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
