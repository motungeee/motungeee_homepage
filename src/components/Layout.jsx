import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            모퉁이 심리상담센터
          </Link>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="메뉴 열기">
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <button className={styles.closeBtn} onClick={closeMenu} aria-label="메뉴 닫기">
              &times;
            </button>
            <Link to="/about" className={location.pathname === '/about' ? styles.active : ''} onClick={closeMenu}>센터 소개</Link>
            <Link to="/counselor" className={location.pathname === '/counselor' ? styles.active : ''} onClick={closeMenu}>상담자 소개</Link>
            <Link to="/programs" className={location.pathname === '/programs' ? styles.active : ''} onClick={closeMenu}>상담 프로그램</Link>
            <Link to="/reservation" className={location.pathname === '/reservation' ? styles.active : ''} onClick={closeMenu}>예약하기</Link>
            <Link to="/location" className={location.pathname === '/location' ? styles.active : ''} onClick={closeMenu}>오시는 길</Link>
          </nav>

          {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>© 2026 Motungeee Psychology Counseling Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
