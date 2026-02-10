import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1595180630737-25e22709292a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=90"
            alt="Counseling Center Interior"
            className={styles.heroImage}
          />
          <div className={styles.overlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>마음의 모퉁이에서<br />잠시 쉬어가세요</h1>
              <p className={styles.subtitle}>모퉁이 심리상담센터는 당신의 이야기를 기다립니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className="container">
          <h2 className="section-title">환영합니다</h2>
          <p className={styles.text}>
            삶의 무게가 버거울 때, 혼자서는 길을 찾기 어려울 때,<br />
            따뜻한 차 한 잔과 함께 당신의 이야기를 들어줄 공간이 여기 있습니다.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <h2 className="section-title">공간 둘러보기</h2>
          <div className={styles.gallery}>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Counseling Room 1"
                className={styles.galleryImage}
              />
              <p className={styles.caption}>따뜻한 햇살이 드는 상담실</p>
            </div>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Counseling Room 2"
                className={styles.galleryImage}
              />
              <p className={styles.caption}>편안한 대화를 위한 공간</p>
            </div>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1540575339264-569259387a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Counseling Room 3"
                className={styles.galleryImage}
              />
              <p className={styles.caption}>마음의 안정을 주는 치유 공간</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
