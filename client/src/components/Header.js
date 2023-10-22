import React from 'react';
import '../styles/Header.css'; // 스타일 파일 임포트

function Header() {
  return (
    <header className="header" style={{ background: 'black', color: 'white' }}>
      <div className="logo">
        <img src="/louisLogo.png" alt="로고" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/">메뉴1</a></li>
          <li><a href="/">메뉴2</a></li>
          <li><a href="/">메뉴3</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;