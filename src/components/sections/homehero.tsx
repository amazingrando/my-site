
import Link from 'next/link';
import * as Fathom from 'fathom-client';

export default function HomeHero() {
  return (
    <div className='px-8 py-4 md:px-16 md:py-8 flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-8xl relative'>
      <h1 className="text-[2.5rem] leading-[1] md:text-6xl lg:text-8xl font-medium text-balance">
        Designer &amp; storyteller for growing brands
      </h1>

      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-balance max-w-4xl inline-block">
        I set the vision, create the structure, and adapt as the story unfolds—whether that&apos;s a <Link href="/projects/yale-ds" className='underline text-blue-600 whitespace-nowrap' onClick={() => { Fathom.trackEvent(`Project link: YaleSites`);}}>design system</Link>, a <Link href="/projects/wti" className='underline text-blue-600 whitespace-nowrap' onClick={() => { Fathom.trackEvent(`Project link: Yale WTI`);}}>website</Link>, or an <Link href="/projects/nyu" className='underline text-blue-600 no-wrap' onClick={() => { Fathom.trackEvent(`Project link: NYU School of Global Public Health`);}}>award-winning project</Link>.
      </h2>
    </div>
  );
} 