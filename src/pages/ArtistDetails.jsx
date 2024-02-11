
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Error, Loader } from '../components';
import ArtistDetailsHeader from '../components/ArtistDetailsHeader';
import { useGetArtistDetailsQuery, useGetArtistSongsQuery } from '../redux/services/shazamApi';
import ArtistSongs from '../components/ArtistSongs';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
  const { data: artistSongs, isFetching: isFetchingArtistSongs, error: ArtistSongsError } = useGetArtistSongsQuery(artistId);
  // if the data is still fetching
  if (isFetchingArtistDetails || isFetchingArtistSongs) {
    return (
      <Loader title="Loading Artist Details" />
    );
  }
  // if there is an error
  if (error || ArtistSongsError) { return (<Error />); }
  return (
    <div className="flex flex-col">
      <ArtistDetailsHeader artistData={artistData?.data} artistId={artistId} />
      <ArtistSongs
        data={artistSongs?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
