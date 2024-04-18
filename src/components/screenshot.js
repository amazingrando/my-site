import Image from 'next/image';
import classNames from 'classnames';

const ScreenshotPlayer = ({ title, src }) => (
  <figure
    className={classNames(
      'p-2 pt-0 bg-slate-200 rounded',
      'border border-slate-400 border-solid',
      'lg:w-[150%]',
    )}
  >
    <div className="!m-0 relative text-center">
      <span className="hidden tracking-[.2em] absolute left-0 top-1 text-xs md:text-base">
        🔴🟡🟢
      </span>
      <span className="text-slate-700 font-bold text-sm uppercase leading-none block py-2">
        {title}
      </span>
    </div>
    <div className="max-h-[70dvh] overflow-y-scroll">
      <Image src={src} alt={title} className="!m-0" />
    </div>
  </figure>
);

export default ScreenshotPlayer;
