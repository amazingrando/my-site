import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt, faSwords } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Header from '@/components/header';

export default function Layout({ children, backgroundColor, textColor }) {
  const destinations = [
    {
      icon: faLinkedin,
      label: 'Resume',
      url: 'https://www.linkedin.com/in/amazingrando/',
      bg: 'bg-linkedin',
    },
    {
      icon: faYoutube,
      label: 'Speaking',
      url: 'https://www.youtube.com/playlist?list=PL752rfJII3mLqPLfDIb8mYxB-kYHV3-1e',
      bg: 'bg-youtube',
    },
    {
      icon: faAt,
      label: 'Email',
      url: 'mailto:oest@amazingrando.com',
      bg: 'bg-email',
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
  ];
  const text = textColor || 'text-slate-700';

  return (
    <div
      className={classNames(
        'flex min-h-[100dvh] flex-col p-8 md:p-24 gap-[10vh] transition-colors',
        text,
      )}
    >
      <Header />

      <main>{children}</main>

      <motion.footer
        initial={{ y: '20vh' }}
        animate={{ y: '100%', transition: { delay: 1 } }}
        className="mt-auto"
      >
        <ul className="flex flex-row flex-wrap md:flex-row gap-6 md:gap-10">
          {destinations.map((destination) => (
            <li key={destination.label}>
              <Link
                href={destination.url}
                className="flex flex-row gap-2 items-center"
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
