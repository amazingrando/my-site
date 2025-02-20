// import { NavPrimary } from "./navPrimary";
import Randy from '@/assets/images/randy.png'
import Image from "next/image";
import Link from "next/link";
import { Emphasis } from "../graphics/emphasis";

const Header = () => {
  return (
    
      <header className="px-8 py-4 md:px-16 md:py-8 md:flex md:flex-row md:justify-between md:items-center md:gap-8 z-40">
        <Link href="/" className="flex flex-row no-wrap gap-1 items-center w-max">
          <Image
            src={Randy}
            alt="Randy"
            className="w-[4rem] h-[4rem] top-[6px] relative -ml-[0.7rem]"
          />
          <div>
            <h1 className="uppercase text-xl md:text-2xl font-bold">
              <span>
                <Emphasis className="w-[6rem] h-[1.5rem] text-blue-600" />
                Amazing
              </span>
              Rando
            </h1>
            <p className="text-sm font-medium">Crafting digital experiences worthy of legend.</p>
          </div>
        </Link> 
        {/* <NavPrimary className="hidden" /> */}
      </header>
  );
};

export default Header;