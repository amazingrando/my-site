import Image from 'next/image';

const SpeakingVideo = ({ img }) => {
  console.log('speakingVideo');

  return (
    <figure className="group w-max max-w-[350px]">
      <div className="relative mb-4">
        <Image src={img} alt="fff" className="rounded-3xl" />
        <div className="shadow-speakingVideo bg-speakingVideoGradient absolute left-0 top-0 w-full h-full rounded-3xl" />
      </div>
      <figcaption className="pl-2">
        <p className="text-lg leading-tight mb-2">
          Maintaining Design Consistency Across Every Channel
          <span className="text-speaking-textHighlight text-sm ml-2">
            32:54
          </span>
        </p>
        <p className="text-speaking-textHighlight font-semibold uppercase text-base">
          Midcamp
        </p>
      </figcaption>
    </figure>
  );
};

export default SpeakingVideo;
