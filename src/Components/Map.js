import React from 'react';

const Map = ({ latitude, longitude }) => {
  const url = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}`;

  return (
    <iframe
      title="map"
      width="600"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      src={url}
      allowFullScreen
    />
  );
};

export default Map;