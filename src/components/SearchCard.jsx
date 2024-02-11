import { Link } from 'react-router-dom';
import altImg from '../assets/imgs/altImg.png';

const SearchCard = ({ song, i, isPlaying, activeSong, data }) => (
  <div className="flex flex-col w-[240px] p-4 bg-white/5 bg-opacity-80
      backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center
        bg-black bg-opacity-50 group-hover:flex 
        ${activeSong?.title === song?.heading?.title
        ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
      />
      <img loading="lazy" alt="song_img" src={song.images?.coverart || song.images?.default || altImg} />
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-bold text-lg text-white truncate">
        <Link to={`/songs/${song?.key}`}>
          {song?.heading?.title}
        </Link>
      </p>
    </div>
  </div>
);

export default SearchCard;
