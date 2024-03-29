import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import altImg from '../assets/imgs/altImg.png';

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className="flex flex-col w-[240px] p-4 bg-white/5 bg-opacity-80
    backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center
      bg-black bg-opacity-50 group-hover:flex 
      ${activeSong?.title === song?.title || song?.heading?.title
          ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img loading="lazy" alt="song_img" src={song.images?.coverart || song.images?.default || altImg} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-bold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title || song?.heading?.title}
          </Link>
        </p>
        <p className="text-sm text-gray-300 mt-1 truncate">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid} ` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
