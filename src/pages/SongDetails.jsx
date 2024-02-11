import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetRelatedSongsQuery, useGetSongDetailsQuery } from '../redux/services/shazamApi';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);
  const { data, isFetching: isFetchingRelatedSongs, error } = useGetRelatedSongsQuery(songid);
  // handle pause click fn
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  // handle play click fn
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  // if the data is still fetching
  if (isFetchingRelatedSongs || isFetchingSongDetails) {
    return (
      <Loader title="Searching song details" />
    );
  }
  // if there is an error
  if (error) { return (<Error />); }
  return (
    <div className="flex flex-col">
      <DetailsHeader songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">BeatBox:</h2>
        <div className="mt-5">
          {
                    songData?.sections[0]?.type === 'SONG'
                      ? songData?.sections[0]?.metadata?.map((line, i) => (
                        <p className="text-gray-400 text-base my-1" key={i}>{line?.text}</p>
                      ))
                      : <p>Sorry, no details found</p>
                }
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
