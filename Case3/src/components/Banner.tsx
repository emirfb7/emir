import React from 'react';
import styles from './Banner.module.css';
import case2Image from '../assets/case2image.svg';
import iconMini from '../assets/icon mini.svg';

interface BannerProps {
  title: string;
  description: string;
  date?: string;
  onButtonClick?: () => void;
  style?: React.CSSProperties;
}

const Banner = ({ title, description, date = "01.01.2000", onButtonClick, style }: BannerProps) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      alert('Banner butona tıklandı!');
    }
  };

  return (
    <div className={styles.banner} style={style}>
      <div className={styles.contents}>
        <div className={styles.contentText}>
          <div className={styles.title}>
            <h1 className={styles.groupMainTitle}>{title}</h1>
            <time className={styles.date}>{date}</time>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.textButton} onClick={handleClick}>
              Raporu Göster
              <img src={iconMini} alt="Icon" />
            </button>
          </div>
        </div>
        <img src={case2Image} alt="Blog Resmi" className={styles.image} />
      </div>
    </div>
  );
};

export default Banner;
