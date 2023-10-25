import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* <a class="logo" href="#home">
        <img src="https://poiemaweb.com/img/logo.png" height="36px">
      </a>
      <nav>
        <ul className="nav-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav> */}
      </header>

      <section className="main">
        <div className="imgBox1">
          <p className="subText1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever{' '}
          </p>
        </div>
        <div className="imgBox2">
          <p className="mainText">Louis poulsen</p>

          <p className="subText2">
            Lorem Ipsum is simply dummy text of the printing{' '}
          </p>

          <p className="subText3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make{' '}
          </p>
        </div>
      </section>

      <section className="newProduct">
        <div className="imgBox"></div>
        <div className="textBox">
          <p className="mainText1">NEW</p>
          <p className="subText1">
            Lorem Ipsum is simply dummy text of the printing{' '}
          </p>

          <p className="subText2">Lorem Ipsum is simply </p>
          <p className="subText3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make{' '}
          </p>
        </div>
      </section>

      <section className="designer">
        <div className="imgBox">
          <p className="subText1">
            Lorem Ipsum is simply dummy text of the printing{' '}
          </p>
        </div>
        <div className="imgBox"></div>
        <div className="imgBox"></div>
        <div className="imgBox"></div>
        <div className="imgBox"></div>
        <div className="imgBox"></div>
      </section>

      <section className="mainSub02">
        <div className="circle"></div>
      </section>

      <section className="productList">
        <div className="product-box">
          <p className="mainText">제품명</p>
          <p className="priceText">000,000won</p>
        </div>
        <div className="product-box"></div>
        <div className="product-box"></div>
        <div className="product-box"></div>
        <div className="product-box"></div>
        <div className="product-box"></div>
      </section>

      <section className="mainSub03">
        <div className="circle"></div>
        <div className="circle"></div>
      </section>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
