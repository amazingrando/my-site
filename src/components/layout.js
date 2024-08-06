import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt, faSwords, faMicrophone } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Head from 'next/head';

export default function Layout({ children, pageTitle }) {
  const destinations = [
    {
      icon: faLinkedin,
      label: 'Experience',
      url: 'https://www.linkedin.com/in/amazingrando/',
      bg: 'bg-linkedin',
    },
    {
      icon: faMicrophone,
      label: 'Podcast',
      url: 'https://designingoodcompany.com/',
      bg: 'bg-youtube',
    },
    {
      icon: faYoutube,
      label: 'Speaking',
      url: 'https://www.youtube.com/playlist?list=PL752rfJII3mLqPLfDIb8mYxB-kYHV3-1e',
      bg: 'bg-youtube',
    },
    {
      icon: faGithub,
      label: 'Code',
      url: 'https://github.com/amazingrando',
      bg: 'bg-github',
    },
    {
      icon: faSwords,
      label: 'Gaming',
      url: 'https://drinkinganddragons.com/',
      bg: 'bg-ttrpg',
    },
    {
      icon: faAt,
      label: 'Email',
      url: 'mailto:oest@amazingrando.com',
      bg: 'bg-email',
    },
  ];
  const text = 'text-slate-700';

  return (
    <div
      className={classNames(
        'flex min-h-[100dvh] flex-col p-8 md:p-24 gap-[5vh] md:gap-[10vh] transition-colors',
        text,
      )}
    >
      <Head>
        <title>{pageTitle || 'Amazing Rando'}</title>
        <meta
          property="og:title"
          content={pageTitle || 'Amazing Rando'}
          key="title"
        />
        <meta property="og:image" content="/sharing.png" />
      </Head>

      <Header />

      <main>{children}</main>

      <motion.footer
        initial={{ y: '20vh' }}
        animate={{ y: '0', transition: { delay: 1 } }}
        className="mt-auto"
      >
        <ul
          className={classNames(
            'w-max grid grid-cols-2 gap-x-8 gap-y-3',
            'md:grid-cols-3',
            'lg:flex lg:flex-row lg:gap-x-8',
          )}
        >
          {destinations.map((destination) => (
            <li key={destination.label}>
              <Link
                href={destination.url}
                className="flex flex-row gap-2 items-center hover:text-sky-600"
              >
                <FontAwesomeIcon
                  icon={destination.icon}
                  className="text-2xl md:text-2xl"
                />{' '}
                <span className="text-lg font-medium">{destination.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.footer>
    </div>
  );
}
