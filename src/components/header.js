import Image from 'next/image';
import Link from 'next/link';
import randyHead from '../assets/images/randy.png';

const Header = () => (
  <header className="z-50">
    <Link href="/" className="flex flex-row no-wrap items-center">
      <Image
        src={randyHead}
        alt="Randy"
        className="w-[3.25rem] h-[3.25rem] ml-[-15px]"
      />
      <h1 className="uppercase text-2xl font-normal">Amazing Rando</h1>
    </Link>
  </header>
);

export default Header;
