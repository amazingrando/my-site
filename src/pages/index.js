import { motion } from 'framer-motion';
import Layout from '@/components/layout';

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

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-4xl md:text-6xl font-normal"
    >
      <motion.span variants={item} className="block">
        Creative Director
      </motion.span>
      <motion.span variants={item} className="block">
        Speaker
      </motion.span>
      <motion.span variants={item} className="block">
        TTRPG gamer
      </motion.span>
      <motion.span variants={item} className="text-sm mt-4">
        Est. 1977
      </motion.span>
    </motion.h1>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
