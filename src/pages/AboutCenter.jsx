import React from 'react';
import styles from './AboutCenter.module.css';
import room01 from '../images/counselingroom01.jpeg';
import room02 from '../images/counselingroom02.jpeg';
import room03 from '../images/counselingroom03.jpeg';

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
              &lt;모퉁이 심리상담센터&gt;는 치유작업실 서사와 협력하여 다각적인 내면 작업을 지원합니다.<br />
              다양한 예술적·언어적 매체를 활용해 지속 가능한 상담문화공간을 지향합니다.
            </p>
          </div>
        </div>

        <h3 className={styles.subTitle}>상담실</h3>
        <div className={styles.gallery}>
          <div className={styles.imageCard}>
            <img src={room01} alt="Individual Counseling Room 1" className={styles.galleryImage} />
            <p className={styles.caption}>개인상담실</p>
          </div>
          <div className={styles.imageCard}>
            <img src={room02} alt="Individual Counseling Room 2" className={styles.galleryImage} />
            <p className={styles.caption}>개인상담실</p>
          </div>
          <div className={styles.imageCard}>
            <img src={room03} alt="Group Counseling Room 1" className={styles.galleryImage} />
            <p className={styles.caption}>집단상담실</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCenter;
