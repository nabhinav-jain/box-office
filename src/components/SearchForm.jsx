import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onInputChange = event => {
    setSearchStr(event.target.value);
  };

  const onRadioChange = event => {
    setSearchOption(event.target.value);
  };

  const options = {
    q: searchStr,
    searchOption,
  };
  const onSubmit = e => {
    e.preventDefault();
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onInputChange} />

      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
