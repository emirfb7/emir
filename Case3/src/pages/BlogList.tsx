import React, { useState, useEffect } from 'react';
import styles from './BlogList.module.css';
import BlogCard from '../components/BlogCard';
import Banner from '../components/Banner';
import { blogService } from '../api/blogService';
import type { BlogPost } from '../api/blogService';

console.log("Banner belirli bi seviyeden sonra eşit küçülmüyor çözemedim");

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setScreenWidth(window.innerWidth);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await blogService.getAllPosts();
        setBlogPosts(data);
      } catch (error) {
        console.error('Blog verileri çekilemedi:', error);
        setError('Blog verileri yüklenirken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleClick = () => {
    alert('Butona tıklandı!');
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  // Mobilde tüm verileri kart olarak göster, desktop'ta banner + kartlar
  const bannerPost = blogPosts[0];
  const cardPosts = isMobile ? blogPosts : blogPosts.slice(1);

  // Ekran genişliğine göre kaç kartın yan yana sığacağını hesapla
  const calculateCardsPerRow = () => {
    // CSS breakpoint'leriyle eşleştir:
    // 1168px+ = 3 kart, 769px-1167px = 2 kart, <769px = 1 kart
    if (screenWidth >= 1168) {
      return 3;
    } else if (screenWidth >= 769) {
      return 2;
    } else {
      return 1;
    }
  };

  const cardsPerRow = calculateCardsPerRow();
  const actualCardCount = Math.min(cardPosts.length, cardsPerRow);
  
  // Tüm kartları göster
  const displayCards = cardPosts;
  
  // Kart genişliğini hesapla (2'li formda dinamik, diğerlerinde sabit)
  const getCardWidth = () => {
    if (cardsPerRow === 3) {
      return '348px'; // 3'lü formda sabit
    } else if (cardsPerRow === 2) {
      // 2'li formda dinamik hesaplama
      const containerWidth = screenWidth - 44; // Group padding'i çıkar
      const gap = 20;
      const availableWidth = containerWidth - gap; // Gap'i çıkar
      const cardWidth = availableWidth / 2; // İki kart için böl
      return `${cardWidth}px`;
    } else {
      return '100%'; // 1'li formda tam genişlik
    }
  };

  const cardWidth = getCardWidth();
  
  // Banner genişliğini hesapla (kartların toplam genişliği + gap'ler)
  const getBannerWidth = () => {
    if (cardsPerRow === 1) return '100%';
    
    if (cardsPerRow === 3) {
      // 3'lü formda sabit hesaplama
      const cardWidth = 348;
      const gap = 20;
      const totalCardsWidth = cardWidth * 3 + gap * 2;
      return `${totalCardsWidth}px`;
    } else if (cardsPerRow === 2) {
      // 2'li formda dinamik hesaplama - sadece 2 kartın genişliği + gap
      const containerWidth = screenWidth - 44;
      const gap = 20;
      const availableWidth = containerWidth - gap;
      const cardWidth = availableWidth / 2;
      const totalCardsWidth = cardWidth * 2 + gap;
      return `${totalCardsWidth}px`;
    }
  };

  const bannerWidth = getBannerWidth();

  return (
      <div className={styles.Group}>
        <h1 className={styles.mainTitle}>Blog Listesi</h1>
        
        {/* Desktop'ta banner ve kartlar için flex container */}
        {!isMobile && actualCardCount > 0 && (
          <div className={styles.desktopLayout}>
            {bannerPost && (
              <Banner 
                title={bannerPost.title}
                description={bannerPost.body}
                date="01.01.2000"
                onButtonClick={handleClick}
                style={{ width: bannerWidth }}
              />
            )}
            <div className={styles.blogCardsContainer}>
              {displayCards.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  description={post.body}
                  id={post.id}
                  style={{ width: cardWidth }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Mobilde veya 1 kart durumunda sadece kartlar */}
        {(isMobile || actualCardCount === 0) && (
          <div className={styles.blogCardsContainer}>
            {displayCards.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.body}
                id={post.id}
                style={{ width: cardWidth }}
              />
            ))}
          </div>
        )}
        
        <div className={styles.buttonContainer2}>
          <button className={styles.textButton2} onClick={handleClick}>
            Daha Fazla Göster
          </button>
        </div>
      </div>
  );
};

export default BlogList;
