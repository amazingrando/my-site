"use client"

import Image from 'next/image'
import yssites from '@/assets/images/projects/ys-sites.png';
import ysImage1 from '@/assets/images/projects/ys-mockuuups-angle-view-mockup-of-office-workplace.jpeg'
import ysImage2 from '@/assets/images/projects/ys-mockuuups-iphone-15-pro-mockup-in-male-hand-against-neutral-background.png'
import ysImage3 from '@/assets/images/projects/ys-mockuuups-macbook-pro-mockup-with-a-woman-relaxing-on-a-chair.jpeg'
import ysImage4 from '@/assets/images/projects/ys-Footer.png'
import ysImage5 from '@/assets/images/projects/ys-Custom Cards.png'
import ysImage6 from '@/assets/images/projects/ys-typography.png'
import YouTubeEmbed from '@/components/ui/youtubeEmbed'
import stanfordImage from '@/assets/images/projects/stanford-mockuuups-transparent-iphone-16-pro-mockup-titanium-black.png'
import stanfordImage2 from '@/assets/images/projects/stanford-mockuuups-transparent-iphone-16-pro-mockup-titanium-black1.png'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import stanfordResponsive from '@/assets/images/projects/stanford-responsive.gif'

function Hero({className}: {className?: string}) {
  return (
    <section className={clsx(
      "min-h-[80vh] grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 px-8 lg:px-16 justify-center items-center relative", 
      className
      )}>
      <div className="max-w-2xl mx-auto lg:col-span-2 lg:max-w-none">
        <h3 className="text-3xl md:text-5xl lg:text-7xl leading-tight md:leading-tight font-semibold tracking-tight text-pretty text-ash-900">Bringing stories to life: an immersive photojournalism experience for Stanford</h3>
        <p className="mt-8 text-base md:text-3xl sm:leading-tight md:leading-tight font-medium text-pretty text-ash-600 sm:text-xl/8">
          To bring Stanford&apos;s photojournalism to life, I designed an immersive, scroll-driven content experience inspired by <i>Snow Fall</i>. The final product is bold, visual, and anything but academic.
        </p>
        <div className="mt-10 flex items-center gap-x-6 mb-8 sm:mb-0">
          <a
            href="https://humsci.stanford.edu/feature/two-seasons-jasper-ridge-0"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Visit the site
          </a>
        </div>
      </div>
      <Image 
        src={stanfordImage} 
        alt="Stanford" 
        className={clsx(
          "absolute right-0 top-0 w-1/2 translate-x-1/2 md:translate-x-16",
          "lg:max-h-[80vh] lg:w-auto lg:translate-x-0 lg:relative lg:right-auto lg:top-auto"
        )} 
      />
      <Image 
        src={stanfordImage2} 
        alt="Stanford" 
        className={clsx(
          "hidden lg:block",
          "absolute right-0 top-0 w-1/2 translate-x-1/2 md:translate-x-16",
          "lg:max-h-[80vh] lg:w-auto lg:translate-x-0 lg:relative lg:right-auto lg:top-auto"
        )} 
      />
    </section>
  )
}

function Impact({className}: {className?: string}) {
  return (
    <section className={clsx("bg-white py-16 px-8 lg:px-16", className)}>
      <div className="prose lg:prose-lg prose-headings:font-semibold prose-strong:text-slate-600 prose-headings:text-slate-700 prose-li:marker:text-slate-600 mx-auto">

        <h2>The launch of the photojournalism storytelling experience for Stanford’s School of Humanities and Sciences (Humsci) made an immediate, university-wide impact.</h2>
        <YouTubeEmbed embedId="-yWCzsHyPK4" className='h-auto md:-mx-8 lg:-mx-16' />
        {/* <Image src={stanfordResponsive} alt="Stanford Responsive" className='w-full h-auto' /> */}
        <p className='lead'>The very first story built with the new design—Jasper Ridge—was selected as the featured story on the Stanford Report homepage, an honor typically reserved for the university’s most high-profile content. The response was swift and overwhelmingly positive:</p>

        <blockquote className='not-prose text-xl md:text-2xl leading-relaxed font-medium my-16 ps-4 md:-mx-12 lg:-mx-32'>
          <FontAwesomeIcon icon={faQuoteLeft} className='float-left text-2xl text-blue-600 -ml-8' />
          The Jasper Ridge story built using the new photojournalism feature on Humsci was the featured story on the Stanford Report this morning (that’s big!). It’s been getting serious love all over campus — from the UXers channel marveling at the beautiful mobile experience (and who compared it to the NYTimes), to delighted heads of department who called it food for the soul…”
          <cite className='block mt-4 text-lg not-italic text-ash-600'>— The Client</cite>
        </blockquote>

        <h2>The project received glowing praise from:</h2>
        
        <ul>
          <li>UX and design teams across campus, who celebrated the elegant mobile experience and immersive feel—many even compared it to the New York Times’ Snowfall</li>
          <li>Faculty and leadership, who described it as “food for the soul”</li>
          <li>Editorial teams, who were thrilled to finally have a flexible system that allowed them to center visual storytelling without compromise</li>
        </ul>

        <p>This wasn’t just a successful launch—it was a turning point.</p>
        
        <p>The new design raised expectations for what digital publishing could look like at Stanford, showing that university storytelling could be editorially rich, emotionally resonant, and visually striking all at once.</p>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <div>
      <Hero />
      <Impact />
      

      <div className="bg-white p-4 pt-8 lg:p-16">
        <YouTubeEmbed embedId="-yWCzsHyPK4"/>
      </div>

      <div className="bg-white p-4 pt-8 lg:p-16">

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 relative">
          <main className="prose lg:prose-lg prose-headings:font-semibold prose-strong:text-slate-600 prose-headings:text-slate-700 prose-li:marker:text-slate-600 pb-16 lg:sticky lg:top-16 self-start">
            <h2>Unifying Yale&apos;s Digital Presence with a Thoughtfully Crafted Design System</h2>
            <p className='lead'>I led the team as the Creative Director, working alongside a UI designer and a frontend engineer from my team at Four Kitchens while teaming up with a UX designer and an accessibility expert from Yale.</p>
            <p>A design system was born, and it delivered the following:</p>
            <ul>
            <li><strong>A suite of design tokens</strong> that define Yale&apos;s digital brand and provide flexibility for future digital projects—web, react, iOS, etc.</li>
            <li><strong>A library of adaptable and customizable components</strong> is available in their CMS. Each component was thoroughly accessibility tested with automated tooling and direct user testing with people with disabilities.</li>
            <li><strong>A theming system that gives users choices</strong> in how their site looks while maintaining Yale&apos;s brand. Giving users the ability to choose how their school or department site looks has increased the adoption of Yale&apos;s centralized site service.</li>
            </ul>
          </main>
          <Image src={yssites} alt="YaleSites homepage" className='border border-ash-200' />
        </div>
        </div>

        <div className='grid grid-cols-2 grid-rows-4 max-h-screen'>
          <Image src={ysImage2} alt="YaleSites homepage" className='row-span-2 object-cover w-full h-full' />
          
          <div className='bg-[#f6f6f6]'>
            <Image src={ysImage6} alt="YaleSites homepage" className='object-contain w-full h-full' />
          </div>
          
          <Image src={ysImage3} alt="YaleSites homepage" className='object-cover w-full h-full' />
          <div className='bg-[#f6f6f6]'>
            <Image src={ysImage5} alt="YaleSites homepage" className='object-contain w-full h-full' />
          </div>
          <div className='bg-[#f6f6f6] row-span-2'>
            <Image src={ysImage4} alt="YaleSites homepage" className='object-contain w-full h-full' />
          </div>
          <Image src={ysImage1} alt="YaleSites homepage" className='object-cover w-full h-full' />
        </div>
  </div>
  )
}