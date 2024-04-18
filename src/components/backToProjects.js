import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/pro-regular-svg-icons';
import Link from 'next/link';

const BackToProjects = () => (
  <p className="mb-8">
    <Link
      href="/projects"
      className="hover:text-sky-600 flex flex-row items-center gap-2 transition-all"
    >
      <FontAwesomeIcon icon={faArrowLeftLong} className="text-sm" /> Back to
      projects
    </Link>
  </p>
);

export default BackToProjects;
