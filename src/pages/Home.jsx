import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import heroImage from '../assets/images/alley01.png';
import center01 from '../images/center01.jpg';
import center02 from '../images/center02.jpg';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          <img
            src={heroImage}
            alt="Rainbow Alleyway"
            className={styles.heroImage}
          />
          <div className={styles.overlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>모퉁이 심리상담센터입니다.</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className="container">
          <h2 className="section-title">환영합니다</h2>
          <p className={styles.text}>
            삶이라는 여행이 지치고 버거울 때<br />
            내 마음 안쪽 숨겨진 아지트를 만납니다.<br />
            당신의 내면과 안전하게 접촉하는 곳, 모퉁이 심리상담센터입니다.
          </p>
        </div>
      </section>

      <section className={styles.centerPreview}>
        <div className="container">
          <h2 className="section-title">센터 둘러보기</h2>
          <div className={styles.imageGrid}>
            <div className={styles.imageCard}>
              <img src={center01} alt="Center Interior 1" className={styles.previewImage} />
            </div>
            <div className={styles.imageCard}>
              <img src={center02} alt="Center Interior 2" className={styles.previewImage} />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Link to="/reservation" className={styles.applyButton}>
              모퉁이 문 두드리기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
