import Layout from '@/components/layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import speakingHero from '@/assets/images/speaking/speaking-hero.png';
import SpeakingVideo from '@/components/speakingVideo';

const Page = ({ data }) => {
  const framerContainer = {
    hidden: { opacity: 0, y: '-50px' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.125,
      },
    },
  };

  const framerItem = {
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
            variants={framerContainer}
            initial="hidden"
            animate="show"
            className="block"
            title="Speaking"
          >
            <motion.span className="inline-block" variants={framerItem}>
              S
            </motion.span>
            <motion.span className="inline-block" variants={framerItem}>
              p
            </motion.span>
            <motion.span className="inline-block" variants={framerItem}>
              e
            </motion.span>
            <motion.span className="inline-block" variants={framerItem}>
              a
            </motion.span>
            <motion.span className="inline-block" variants={framerItem}>
              k
            </motion.span>
            <motion.span className="inline-block" variants={framerItem}>
              i
            </motion.span>
            <motion.span className="inline-block" variants={framerItem}>
              n
            </motion.span>
            <motion.span className="inline-block" variants={framerItem}>
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
            {data.items.map((item) => (
              <li key={item.id}>
                <SpeakingVideo
                  img={
                    item.snippet.thumbnails.maxres
                      ? item.snippet.thumbnails.maxres.url
                      : item.snippet.thumbnails.high.url
                  }
                  title={item.snippet.title}
                  videoId={item.snippet.resourceId.videoId}
                  organization={item.snippet.videoOwnerChannelTitle}
                />
                {console.log(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const YOUTUBE_HOST = 'https://youtube.googleapis.com';

  const res = await fetch(
    `${YOUTUBE_HOST}/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL752rfJII3mLqPLfDIb8mYxB-kYHV3-1e&key=${process.env.YOUTUBE_API_KEY}`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout backgroundColor="bg-speaking-dark" textColor="text-white">
      {page}
    </Layout>
  );
};
