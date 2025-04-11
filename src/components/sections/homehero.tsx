export default function HomeHero() {
  return (
    <div className='px-8 py-4 md:px-16 md:py-8 flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-8xl relative'>
      <h1 className="text-[2.5rem] leading-[1] md:text-6xl lg:text-8xl font-medium text-balance">
      I make the internet <span className="whitespace-nowrap">less ugly</span> and more useful.
      </h1>

      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium  max-w-4xl inline-block">
        Let’s be honest: there’s a lot of bad design out there. I help fix that. I turn tangled content into clean experiences, messy ideas into thoughtful strategies, and chaos into calm—designed for impact, delivered with care.
      </h2>
    </div>
  );
} 