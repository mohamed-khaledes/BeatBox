import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamApi';

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) {
    return <Loader title="loading top charts" />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="flex flex-col">
      <h2
        className="text-3xl font-bold text-white text-left my-4"
      >
        Discover top charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {
                  data?.map((song, i) => (
                    <SongCard
                      key={song.key}
                      song={song}
                      i={i}
                      activeSong={activeSong}
                      isPlaying={isPlaying}
                      data={data}
                    />
                  ))
              }
      </div>
    </div>
  );
};

export default TopCharts;
