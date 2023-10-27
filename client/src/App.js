// App.js

import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './pages/Main';
import NewProduct from './pages/NewProduct';
import Designer from './pages/Designer';
import RecommendProduct from './pages/RecommendProduct';
import ProductList from './pages/ProductList';
import MainSub03 from './pages/MainSub03';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NewProduct />
      <Designer />
      <RecommendProduct />
      <ProductList />
      <MainSub03 />
      <Footer />
    </div>
  );
}

export default App;
