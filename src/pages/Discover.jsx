import { useSelector, useDispatch } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetSongsByGenreQuery } from '../redux/services/shazamApi';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;
  // if the data still fetching
  if (isFetching) { return <Loader title="Loading songs..." />; }
  // if the data get error
  if (error) { return <Error />; }
  return (
    <div className="flex flex-col">
      <div
        className="w-full flex justify-between items-center
            sm:flex-row flex-col mt-3 mb-10"
      >
        <h2
          className="font-bold text-3xl text-white
        text-left"
        >
          Discover {genreTitle}
        </h2>
        <select
          onChange={(e) => { dispatch(selectGenreListId(e.target.value)); }}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm
        rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div
        className="flex flex-wrap sm:justify-start justify-center
      gap-8"
      >
        {data?.tracks?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}

      </div>
    </div>
  );
};
export default Discover;
