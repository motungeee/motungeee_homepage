import React from 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">오시는 길</h2>

        <div className={styles.mapContainer}>
          <div className={styles.mapPlaceholder}>
            네이버 지도 영역
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.address}>
            <h3>주소</h3>
            <p>서울시 마포구 신촌로2길 5-14 2층</p>
            <p className={styles.detail}>
              동교동교회를 지나 우회전하여 골목으로 들어오세요.<br />
              풍년한식뷔페 맞은 편, 카페 틸로스터스 건물 2층입니다.
            </p>
          </div>

          <div className={styles.transport}>
            <h3>대중교통 이용 시</h3>
            <ul>
              <li>
                <strong>지하철</strong><br />
                홍대입구역 (경의중앙선) 5번 출구 도보 3분
              </li>
              <li>
                <strong>버스</strong><br />
                동교동삼거리역 (271, 602, 604, 721, 5712, 5714,  6712, 7612 등) 도보 3분
              </li>
            </ul>
          </div>

          <div className={styles.parking}>
            <h3>주차 안내</h3>
            <p>동교3 공영주차장 등 인근 공영주차장 이용 (건물 내 주차 불가)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
