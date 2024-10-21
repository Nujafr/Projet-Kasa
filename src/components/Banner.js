import React from 'react';
import './Banner.css';

function Banner({ imageUrl, altText, bannerTitle}) {
  return (
    <div className="banner">
      <img src={imageUrl} alt={altText} className="banner-image" />
      <h2>{bannerTitle}</h2>
    </div>
  );
}

export default Banner;