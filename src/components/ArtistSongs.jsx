import SongBar from './SongBar';

const ArtistSongs = (
  { data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId },
) => (
  <div className="flex flex-col mt-5">
    <h1 className="font-bold text-3xl text-white">Artist Songs</h1>
    <div className="mt-6 w-full flex flex-col">
      {
        data?.map((song, i) => (
          <SongBar
            i={i}
            song={song}
            key={i}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            artistId={artistId}
          />
        ))
      }
    </div>
  </div>
);
export default ArtistSongs;
