import React from 'react';
import styles from './Counselor.module.css';
import counselorImage from '../images/woosarah.webp';

const Counselor = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">상담자 소개</h2>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <img src={counselorImage} alt="Counselor Woo Sarah" className={styles.profileImage} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>우사라 <span className={styles.title}>심리상담사</span></h3>
            <div className={styles.philosophy}>
              <p>
                &lt;모퉁이 심리상담센터&gt;는 길을 걷다 우연히 만나는 아늑한 아지트처럼 머물며 환대받을 수 있는 공간을 지향합니다.
              </p>
              <p>
                저는 상담과 연구 현장에서 쌓아온 경험을 바탕으로
                대상관계이론과 경험중심적 접근, 내면가족체계치료 (IFS)를 통해
                내담자의 내면 세계를 깊이 있게 살피고자 합니다.
              </p>
              <p>
                특히 안전한 울타리 안에서
                돌봄이 필요한 취약한 마음들과 접촉하며 정서를 조율해가는 과정을 중요하게 여깁니다.
              </p>
              <p>
                각자의 궤도를 여행하는 우리가 잠시 교차하는 이 소중한 시간 동안
                당신의 잊힌 마음들이 안전하게 쉴 수 있는 든든한 동행자가 되겠습니다.
              </p>
            </div>
            <div className={styles.resume}>
              <h4>자격</h4>
              <ul>
                <li>한국상담심리학회 상담심리사 1급 (2301호)</li>
              </ul>
              <h4 style={{ marginTop: '1.2rem' }}>학력</h4>
              <ul>
                <li>이화여자대학교 심리학과 학사</li>
                <li>이화여자대학교 심리학과 석사</li>
                <li>한림대학교 의학과 박사</li>
              </ul>
              <h4 style={{ marginTop: '1.2rem' }}>경력</h4>
              <ul>
                <li>(현) 모퉁이 심리상담센터 대표상담사</li>
                <li>(현) 상담공간 서로오롯 상담사</li>
                <li>(현) 서강대학교 서강 상담심리 첨단연구소 연구원</li>
                <li>(전) 한림대학교성심병원 가정의학과 책임연구원</li>
                <li>(전) 강북삼성병원 미래헬스케어팀 연구원</li>
                <li>(전) 마포구청소년상담복지센터 청소년동반자</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselor;
