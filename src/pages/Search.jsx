import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Error, Loader } from '../components';
import { useGetSearchQuery } from '../redux/services/shazamApi';
import SearchCard from '../components/SearchCard';

const Search = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { searchTerm: term } = useParams();
  const { data, isFetching, error } = useGetSearchQuery(term);
  const searchNone = null;
  const songs = data?.tracks?.hits;
  if (isFetching) {
    return <Loader title="loading top charts" />;
  }
  if (error) { return <Error />; }
  return (
    <div className="flex flex-col">
      <h2
        className="text-3xl font-bold text-white text-left my-4"
      >
        Showing results of <span>{term}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {
                  songs?.map((song, i) => (
                    <SearchCard
                      key={song.key}
                      song={song}
                      i={i}
                      activeSong={activeSong}
                      isPlaying={isPlaying}
                      data={data}
                      searchNone={searchNone}
                    />
                  ))
              }
      </div>
    </div>
  );
};

export default Search;
