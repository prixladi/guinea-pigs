import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery = () => {
  const [gpData, setGpData] = useState(null);

  const fetchDataAsync = async () => {
    const request = await fetch('./guineaPigs.json');
    var json = await request.json();

    setGpData(json);
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  if (!gpData) return <div />;

  const images = gpData.pictures.map(value => {
    return {
      original: `./images/${value.name}`,
      thumbnail: `./images/${value.name}`,
      thumbnailLabel: value.description
    };
  });

  return (
    <div className='container'>
      <ImageGallery
        useBrowserFullscreen='true'
        thumbnailPosition='left'
        items={images}
      />
    </div>
  );
};

export { Gallery };
