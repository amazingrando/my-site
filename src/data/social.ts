import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faAt, faSwords, faMicrophone } from '@fortawesome/pro-solid-svg-icons';

// Define the type for our social destination items
type SocialDestination = {
  icon: typeof FontAwesomeIcon.arguments;
  label: string;
  url: string;
  bg: string;
  ariaLabel?: string;
};

/**
 * Social media and contact destinations
 * Used to display social links and contact information across the site
 */
const destinations: SocialDestination[] = [
  {
    icon: faLinkedin,
    label: 'Experience',
    url: 'https://www.linkedin.com/in/amazingrando/',
    bg: 'bg-linkedin',
    ariaLabel: 'View my professional experience on LinkedIn',
  },
  {
    icon: faMicrophone,
    label: 'Podcast',
    url: 'https://designingoodcompany.com/',
    bg: 'bg-podcast',  // Changed from bg-youtube to be more specific
    ariaLabel: 'Listen to my podcast',
  },
  {
    icon: faYoutube,
    label: 'Speaking',
    url: 'https://www.youtube.com/playlist?list=PL752rfJII3mLqPLfDIb8mYxB-kYHV3-1e',
    bg: 'bg-youtube',
    ariaLabel: 'Watch my speaking engagements',
  },
  {
    icon: faGithub,
    label: 'Code',
    url: 'https://github.com/amazingrando',
    bg: 'bg-github',
    ariaLabel: 'View my code on GitHub',
  },
  {
    icon: faSwords,
    label: 'Gaming',
    url: 'https://drinkinganddragons.com/',
    bg: 'bg-ttrpg',
    ariaLabel: 'Check out my gaming content',
  },
  {
    icon: faAt,
    label: 'Email',
    url: 'mailto:oest@amazingrando.com',
    bg: 'bg-email',
    ariaLabel: 'Send me an email',
  },
];

export default destinations;