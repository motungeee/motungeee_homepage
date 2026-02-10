import React from 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">오시는 길</h2>

        <div className={styles.mapContainer}>
          <div className={styles.mapPlaceholder}>
            지도 영역 (추후 네이버/카카오 지도 연동)
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.address}>
            <h3>주소</h3>
            <p>서울시 OO구 OO로 123, 모퉁이빌딩 3층</p>
          </div>

          <div className={styles.transport}>
            <h3>대중교통 이용 시</h3>
            <ul>
              <li>
                <strong>지하철</strong><br />
                2호선 OO역 3번 출구 도보 5분
              </li>
              <li>
                <strong>버스</strong><br />
                OO정류장 하차 (간선 123, 지선 4567)
              </li>
            </ul>
          </div>

          <div className={styles.parking}>
            <h3>주차 안내</h3>
            <p>건물 내 주차장이 협소하오니 인근 공영주차장을 이용해 주시기 바랍니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
