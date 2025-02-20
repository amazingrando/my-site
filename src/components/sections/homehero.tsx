import Sparkles from '@/lib/sparkle';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <div className='px-8 py-4 md:px-16 md:py-8 flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-8xl relative'>
      <h1 className="text-[2.5rem] leading-[1] md:text-6xl lg:text-8xl font-medium text-balance">
        Crafting digital experiences{" "} 
        <Sparkles 
          maxSparkles={3} 
          pattern="random"
          animationDuration={1000}
          minSize={25}
          maxSize={50}
        >
        worthy of legend
        </Sparkles>
      </h1>

      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-balance max-w-4xl inline-block">
        I set the vision, create the structure, and adapt as the story unfolds—whether that&apos;s a <Link href="/design-systems" className='underline text-blue-600 whitespace-nowrap'>design system</Link>, a <Link href="/websites" className='underline text-blue-600 whitespace-nowrap'>website</Link>, or an <Link href="/awards" className='underline text-blue-600 no-wrap'>award-winning project</Link>.
      </h2>
    </div>
  );
} 