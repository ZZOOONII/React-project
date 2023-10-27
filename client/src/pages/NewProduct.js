import React from 'react';
import './NewProduct.scss';

function NewProduct() {
  return (
    <div className="newProduct">
      {' '}
      <section className="newProduct">
        <div className="imgBox"></div>
        <div className="textBox">
          <p className="mainText1">Reflection</p>
          <p className="subText1">FINDING A LOST ICON</p>

          <p className="subText2">The shades</p>
          <p className="subText3">
            오리지널 PH Septima 5가 PH 5/5의 전등갓 크기를 기반으로 하듯이,
            <br /> PH 4/4 램프의 전등갓 크기를 기반으로 하는
            <br />
            좀더 작은 PH Septima 4는 1931년에 출시되었습니다.{' '}
          </p>
        </div>
      </section>
    </div>
  );
}

export default NewProduct;
