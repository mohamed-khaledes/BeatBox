import SongBar from './SongBar';

const RelatedSongs = (
  { data, isPlaying, activeSong, handlePauseClick, handlePlayClick },
) => (
  <div className="flex flex-col mt-5">
    <h1 className="font-bold text-3xl text-white">Related Songs</h1>
    <div className="mt-6 w-full flex flex-col">
      {
        data?.tracks?.map((song, i) => (
          <SongBar
            i={i}
            song={song}
            key={i}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))
      }
    </div>
  </div>
);
export default RelatedSongs;
