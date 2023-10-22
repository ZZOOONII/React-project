import React from 'react';
import Header from './components/Header'; // 헤더 컴포넌트
import Footer from './components/Footer'; // 푸터 컴포넌트
import './App.css';
import Section from './components/Section';
// import bg01 from "./bg01.png";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
      {/* <img src={bg01} alt="background_img"/> */}
      </main>

      <Section backgroundColor="black">1번 섹션</Section>
      <Section backgroundColor="gray">2번 섹션</Section>
      <Section backgroundColor="black">3번 섹션</Section>
      <Section backgroundColor="white">4번 섹션</Section>
      <Section backgroundColor="black">5번 섹션</Section>
      <Section backgroundColor="white">6번 섹션</Section>
      <Footer />
    </div>
  );
}

export default App;