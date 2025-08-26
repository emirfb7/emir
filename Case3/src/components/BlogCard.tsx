import React from "react";
import styles from './BlogCard.module.css'; 
import case2Image from '../assets/case2image.svg';
import iconMini from '../assets/icon mini.svg';

interface BlogCardProps {
  title: string;
  description: string;
  id: number;
  style?: React.CSSProperties;
}

const BlogCard = ({ title, description, id, style }: BlogCardProps) => {

    const handleClick = () => {
        alert(`Blog ID: ${id} - Butona tıklandı!`);
    };

    return (
        <div className={styles.BlogCard} style={style}>
         <div className={styles.content}>
          <div className={styles.contentText}>
          <div className={styles.title}>
          <h1 className={styles.mainTitle}>{title}</h1>
          <time className={styles.date}>01.01.2000</time>
          </div>
          <p className={styles.description}>{description}</p>
           <div className={styles.buttonContainer}>
           <button className={styles.textButton} onClick={handleClick}>
            Raporu Göster
            <img src={iconMini} alt="Icon" />
           </button>
           </div>
        </div>
           
        </div>
        <img src={case2Image} alt="Blog Resmi" className={styles.image} />
        </div>
    );
  };
  
  export default BlogCard;