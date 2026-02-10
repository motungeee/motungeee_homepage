import React from 'react';
import styles from './AboutCenter.module.css';

const AboutCenter = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">센터 소개</h2>
        <div className={styles.intro}>
          <p className={styles.description}>
            <strong>모퉁이 심리상담센터</strong>는 마음의 쉼터가 필요한 분들을 위한 공간입니다.<br />
            지치고 힘든 마음을 잠시 내려놓고, 온전히 자신에게 집중할 수 있는 시간을 마련해 드립니다.
          </p>
          <div className={styles.partnership}>
            <h3>치유작업실 서사와 함께합니다</h3>
            <p>
              저희 센터는 치유작업실 서사와 협력하여<br />
              더욱 깊이 있고 전문적인 치유 과정을 돕고 있습니다.
            </p>
          </div>
        </div>

        <div className={styles.gallery}>
          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder}>상담실 전경 1</div>
            <p className={styles.caption}>따뜻한 햇살이 드는 상담실</p>
          </div>
          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder}>상담실 전경 2</div>
            <p className={styles.caption}>편안한 대화를 위한 공간</p>
          </div>
          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder}>상담실 전경 3</div>
            <p className={styles.caption}>마음의 안정을 주는 치유 공간</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCenter;
