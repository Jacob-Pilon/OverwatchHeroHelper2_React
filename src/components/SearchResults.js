import React from 'react';

const SearchResults = ({ data, searchQuery }) => {
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredData.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default SearchResults;
