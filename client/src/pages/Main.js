import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      {' '}
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
    </div>
  );
}

export default Main;
