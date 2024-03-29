import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-whithin:text-gray-600"
    >
      <label htmlFor="search-feild" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-feild"
          placeholder="search"
          autoComplete="off"
          id="search-feild"
          type="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="flex-1 bg-transparent border-none outline-none
    text-base placeholder-gray-500 text-white p-4
    "
        />
      </div>
    </form>
  );
};

export default Searchbar;
