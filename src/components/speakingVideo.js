import Image from 'next/image';

const SpeakingVideo = ({ img, title, organization, videoId }) => (
  <figure className="group w-max max-w-[350px]">
    <a href={`https://www.youtube.com/watch?v=${videoId}`}>
      <div className="relative mb-4">
        <Image
          src={img}
          alt={title}
          width={400}
          height={400}
          className="rounded-3xl"
        />
        <div className="shadow-speakingVideo bg-speakingVideoGradient absolute left-0 top-0 w-full h-full rounded-3xl" />
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
