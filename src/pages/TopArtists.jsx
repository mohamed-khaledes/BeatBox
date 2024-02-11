import { Error, Loader, ArtistCard } from '../components';
import { useGetTopSongsQuery } from '../redux/services/shazamApi';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopSongsQuery();
  if (isFetching) {
    return <Loader title="loading top Aritsts" />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="flex flex-col">
      <h2
        className="text-3xl font-bold text-white text-left my-4"
      >
        Discover top Aritsts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {
            data?.tracks?.map((track, i) => (
              <ArtistCard
                track={track}
                i={i}
                key={i}
              />
            ))
        }
      </div>
    </div>
  );
};

export default TopArtists;
