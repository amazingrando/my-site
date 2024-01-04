import Image from 'next/image';

const SpeakingVideo = ({ img, title, organization, videoId }) => (
  <figure className="group">
    <a href={`https://www.youtube.com/watch?v=${videoId}`}>
      <div className="relative mb-4">
        <Image
          src={img}
          alt={title}
          width={700}
          height={700}
          className="border border-white/20 border-solid rounded-xl"
        />
        <div className="shadow-speakingVideo absolute left-0 top-0 w-full h-full rounded-xl" />
      </div>
      <figcaption className="pl-2">
        <p className="text-lg leading-tight mb-2">{title}</p>
        <p className="text-speaking-textHighlight font-semibold uppercase text-base">
          {organization}
        </p>
      </figcaption>
    </a>
  </figure>
);

export default SpeakingVideo;
