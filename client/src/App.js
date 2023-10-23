import React from 'react';
import Header from './components/Header'; // 헤더 컴포넌트
import Footer from './components/Footer'; // 푸터 컴포넌트
import './App.css';
import Section from './components/Section';
// import section01_img from './section01-1.png';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="mainContent" backgroundColor="black">
        <div className="light">
          <img src="/section01-1.png" alt="blacklight_img" />
        </div>
        <div className="small-rect1">
          <img src="/section01-2.png" alt="section01-2" />
        </div>
        <div className="small-rect2">
          <img src="/section01-3.png" alt="section01-3" />
        </div>
      </main>

      <Section className="mainSection02" backgroundColor="#333333">
        <img
          src="/section02-1.png"
          alt="section02_img"
          style={{ width: '50%', height: 'auto' }}
        />
      </Section>

      <Section backgroundColor="black">3번 섹션</Section>
      <Section backgroundColor="white">4번 섹션</Section>
      <Section backgroundColor="black">5번 섹션</Section>
      <Section backgroundColor="white">6번 섹션</Section>
      {/*  */}
      <Section backgroundColor="white">
        <Page1 />
      </Section>
      <Section backgroundColor="white">
        <Page2 />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
