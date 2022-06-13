import MaxWidthWrapper from '../MaxWidthWrapper';

export default function YouTube({ id }: { id: string }) {
  return (
    <MaxWidthWrapper>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
      />
    </MaxWidthWrapper>
  );
}
