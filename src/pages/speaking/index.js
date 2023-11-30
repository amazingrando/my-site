import Layout from '@/components/layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import speakingHero from '@/assets/images/speaking/speaking-hero.png';
import rectangleImage from '@/assets/images/speaking/rectangle.png';
import SpeakingVideo from '@/components/speakingVideo';

const Page = () => {
  const container = {
    hidden: { opacity: 0, y: '-50px' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.125,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: '-50px' },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Image
        src={speakingHero}
        alt=""
        className="absolute top-0 left-0 w-full z-10 max-w-[1200px]"
      />
      <div className="relative z-20 flex flex-col gap-[20vh]">
        <h1 className="text-4xl md:text-6xl font-normal">
          <motion.span
            variants={container}
            initial="hidden"
            animate="show"
            className="block"
            title="Speaking"
          >
            <motion.span className="inline-block" variants={item}>
              S
            </motion.span>
            <motion.span className="inline-block" variants={item}>
              p
            </motion.span>
            <motion.span className="inline-block" variants={item}>
              e
            </motion.span>
            <motion.span className="inline-block" variants={item}>
              a
            </motion.span>
            <motion.span className="inline-block" variants={item}>
              k
            </motion.span>
            <motion.span className="inline-block" variants={item}>
              i
            </motion.span>
            <motion.span className="inline-block" variants={item}>
              n
            </motion.span>
            <motion.span className="inline-block" variants={item}>
              g
            </motion.span>
          </motion.span>
        </h1>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-light">
            Because you like{' '}
            <strong className="font-semibold">Design Systems</strong>
          </h2>
          <ul>
            <li>
              <SpeakingVideo img={rectangleImage} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;

Page.getLayout = function getLayout(page) {
  return (
    <Layout backgroundColor="bg-speaking-dark" textColor="text-white">
      {page}
    </Layout>
  );
};
