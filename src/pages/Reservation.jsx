import React from 'react';
import styles from './Reservation.module.css';
import qrCode from '../images/new_qr.webp';

const Reservation = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">상담 예약하기</h2>
        <div className={styles.content}>
          <div className={styles.guide}>
            <h3>예약 안내</h3>
            <p className={styles.guideText}>
              모퉁이 심리상담센터는 <strong>100% 사전 예약제</strong>로 운영됩니다.<br />
              아래 링크를 통해 신청서를 작성해 주시면 확인 후 연락드립니다.
            </p>
            <ol className={styles.steps}>
              <li>예약 신청서 작성 (구글 설문지)</li>
              <li>담당자가 내용 확인 후 이메일로 일정 조율 (5일 이내)</li>
              <li>예약 확정 및 안내 메일 발송</li>
              <li>센터 방문 및 상담 진행</li>
            </ol>
          </div>

          <div className={styles.action}>
            <a
              href="https://forms.gle/mGEozsHX165mSyum8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              상담 예약 신청서 작성하기
            </a>
            <div className={styles.qrWrapper}>
              <img src={qrCode} alt="Reservation QR Code" className={styles.qrCode} />
            </div>
            <p className={styles.contact}>
              문의: <a href="mailto:motung.eee@gmail.com">motung.eee@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
