import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link to="/" className={styles.logo}>
            모퉁이 심리상담센터
          </Link>
          <nav className={styles.nav}>
            <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>센터 소개</Link>
            <Link to="/counselor" className={location.pathname === '/counselor' ? styles.active : ''}>상담자 소개</Link>
            <Link to="/programs" className={location.pathname === '/programs' ? styles.active : ''}>상담 프로그램</Link>
            <Link to="/reservation" className={location.pathname === '/reservation' ? styles.active : ''}>예약하기</Link>
            <Link to="/location" className={location.pathname === '/location' ? styles.active : ''}>오시는 길</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>© 2026 Motungee Psychology Counseling Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
