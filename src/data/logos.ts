import colombia from '@/assets/images/logos/colombia.svg';
import fourKitchens from '@/assets/images/logos/fourkitchens.svg';
import ithaca from '@/assets/images/logos/ithaca.svg';
import nyu from '@/assets/images/logos/nyu.svg';
import smithCollege from '@/assets/images/logos/smith-college.svg';
import stanford from '@/assets/images/logos/stanford.svg';
import texasLawHelp from '@/assets/images/logos/texaslawhelp.svg';
import uft from '@/assets/images/logos/uft.svg';
import yale from '@/assets/images/logos/yale.svg';

export const logos = [
  {
    logo: colombia,
    name: 'Colombia',
    colSpan: 'col-span-3',
    rowSpan: 'row-span-1'
  },
  {
    logo: fourKitchens,
    name: 'Four Kitchens',
    colSpan: 'col-span-3',
    rowSpan: 'row-span-1'
  },
  {
    logo: ithaca,
    name: 'Ithaca College',
    colSpan: 'col-span-3',
    rowSpan: 'row-span-1'
  },
  {
    logo: nyu,
    name: 'NYU',
    colSpan: 'col-span-2',
    rowSpan: 'row-span-1'
  },
  {
    logo: smithCollege,
    name: 'Smith College',
    colSpan: 'col-span-3',
    rowSpan: 'row-span-1'
  },
  {
    logo: stanford,
    name: 'Stanford',
    colSpan: 'col-span-3',
    rowSpan: 'row-span-1'
  },
  {
    logo: texasLawHelp,
    name: 'Texas Law Help',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-2'
  },
  {
    logo: uft,
    name: 'UFT',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    logo: yale,
    name: 'Yale',
    colSpan: 'col-span-2',
    rowSpan: 'row-span-1'
  },
  
] as const;

export type Logo = typeof logos[number];
