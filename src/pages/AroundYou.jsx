import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsAroundYouQuery } from '../redux/services/shazamApi';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsAroundYouQuery(country);

  useEffect(() => {
    // at_ZRyQRRbb9g3K5tuzl79NmGodMgHfG
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_ZRyQRRbb9g3K5tuzl79NmGodMgHfG')
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);
  if (isFetching && loading) {
    return <Loader title="loading songs around you" />;
  }
  if (error && country) {
    return <Error />;
  }
  return (
    <div className="flex flex-col">
      <h2
        className="text-3xl font-bold text-white text-left my-4"
      >
        Around You <span className="font-black">{country}</span>
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

export default AroundYou;
