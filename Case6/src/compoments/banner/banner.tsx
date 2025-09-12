import React from 'react';
import './banner.css';
import Group4Image from '../../assets/Group 4.svg';

interface BannerProps {
  // Props buraya eklenecek
}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="banner">
      <img src={Group4Image} alt="Group 4" className="square1" />
      <div className="square2"> Your special
      playlist </div>
    </div>
  );
};

export default Banner;
