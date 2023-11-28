import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt, faSwords } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';
import randyHead from '../assets/images/randy.png';

const Destination = (value) => {
  const { icon, label, url } = value;
  return (
    <li>
      <Link
        href={url}
        className="flex flex-row gap-2 items-center text-randyGray hover:text-blue-800 transition-colors"
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
    },
    {
      icon: faYoutube,
      label: 'Talks',
      url: 'https://www.youtube.com/channel/UCox8hD-hnxaNTdFVkWT64gA',
    },
    { icon: faAt, label: 'Email', url: 'mailto:oest@amazingrando.com' },
    { icon: faGithub, label: 'Code', url: 'https://github.com/amazingrando' },
    { icon: faSwords, label: 'TTRPGs', url: 'https://drinkinganddragons.com/' },
  ];
  return (
    <div className="flex min-h-screen flex-col p-8 md:p-24 gap-[10vh]">
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
            <Destination {...destination} key={destination.label} />
          ))}
        </ul>
      </footer>
    </div>
  );
}
