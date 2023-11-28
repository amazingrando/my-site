import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt, faSwords } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';
import randyHead from '../assets/images/randy.png';

const Destination = (value, setBg) => {
  const { icon, label, url, bg } = value;
  return (
    <li>
      <Link
        href={url}
        className="flex flex-row gap-2 items-center text-randyGray hover:text-blue-800 transition-colors"
        onMouseEnter={setBg(bg || 'bg-white')}
      >
        <FontAwesomeIcon icon={icon} className="text-4xl" />{' '}
        <span className="text-lg font-medium">{label}</span>
      </Link>
    </li>
  );
};

export default function Home() {
  const destinations = [
    {
      icon: faLinkedin,
      label: 'Resume',
      url: 'https://www.linkedin.com/in/amazingrando/',
      bg: 'bg-linkedin',
    },
    {
      icon: faYoutube,
      label: 'Talks',
      url: 'https://www.youtube.com/channel/UCox8hD-hnxaNTdFVkWT64gA',
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
      label: 'TTRPGs',
      url: 'https://drinkinganddragons.com/',
      bg: 'bg-ttrpg',
    },
  ];
  const [bg, setBg] = useState('bg-white');
  const [text, setText] = useState('text-almostBlack');

  const hoverHandler = {
    timeoutID: null,

    reset() {
      setBg('bg-white');
      setText('text-almostBlack');
    },

    enter(bgValue) {
      clearTimeout(hoverHandler.timeoutID);
      setBg(bgValue || 'bg-white');
      setText('text-white');
    },

    leave() {
      hoverHandler.timeoutID = setTimeout(hoverHandler.reset, 250);
    },
  };

  return (
    <div
      className={classNames(
        'flex min-h-[100dvh] flex-col p-8 md:p-24 gap-[10vh] transition-colors',
        bg,
        text,
      )}
    >
      <header className="flex flex-row no-wrap items-center">
        <Image
          src={randyHead}
          alt="Randy"
          className="w-[3.25rem] h-[3.25rem] ml-[-15px]"
        />
        <h1 className="uppercase text-2xl font-normal">Amazing Rando</h1>
      </header>
      <main>
        <h1 className="text-4xl md:text-6xl font-normal">
          Creative Director
          <br /> Speaker
          <br /> TTRPG gamer
        </h1>
        <p className="text-sm mt-4">Est. 1977</p>
      </main>
      <footer className="mt-auto">
        <ul className="flex flex-row flex-wrap md:flex-row gap-6 md:gap-10">
          {destinations.map((destination) => (
            <li key={destination.label}>
              <Link
                href={destination.url}
                className="flex flex-row gap-2 items-center hover:text-white"
                onMouseEnter={() => {
                  hoverHandler.enter(destination.bg);
                }}
                onMouseLeave={() => {
                  // https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout#examples
                  hoverHandler.leave();
                }}
              >
                <FontAwesomeIcon icon={destination.icon} className="text-4xl" />{' '}
                <span className="text-lg font-medium">{destination.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
