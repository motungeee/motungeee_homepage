import React from 'react';
import styles from './Counselor.module.css';

const Counselor = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">상담자 소개</h2>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>상담사 사진</div>
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>김이름 <span className={styles.title}>심리상담사</span></h3>
            <div className={styles.philosophy}>
              <p>
                "당신의 이야기가 온전히 받아들여질 때,<br />
                비로소 치유는 시작됩니다."
              </p>
              <p>
                저는 내담자분들이 자신의 내면을 안전하게 탐색하고,<br />
                스스로 답을 찾아갈 수 있도록 동행하는 상담자가 되고자 합니다.
              </p>
            </div>
            <div className={styles.resume}>
              <h4>학력 및 자격</h4>
              <ul>
                <li>OO대학교 심리학과 학사</li>
                <li>OO대학원 임상심리 전공 석사</li>
                <li>한국상담심리학회 상담심리사 1급</li>
                <li>여성가족부 청소년상담사 2급</li>
              </ul>
              <h4>경력</h4>
              <ul>
                <li>前 OO 청소년상담복지센터 상담원</li>
                <li>前 OO 심리클리닉 부원장</li>
                <li>現 모퉁이 심리상담센터 센터장</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselor;
