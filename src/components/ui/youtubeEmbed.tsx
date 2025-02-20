interface YouTubeEmbedProps {
  embedId: string;
  title?: string;
}

const YouTubeEmbed = ({ embedId, title = 'YouTube video player' }: YouTubeEmbedProps) => (
  <div className="aspect-w-16 aspect-h-9 aspect-video border border-slate-400 border-solid rounded">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  </div>
);

export default YouTubeEmbed;
