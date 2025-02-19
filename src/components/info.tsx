import React from 'react';

export const Info = () => {
  return (
    <section className="info__section">
      <div className="info__block left">
        <span className='triangle'/>
        <div className="info__title">Практические модули</div>
        <p className='text'>Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</p>
      </div>
      <div className="info__block right">
        <div className="info__title">Итоговая аттестация</div>
        <ul className='text'>
          <li>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
          <li>Защита итоговой аттестационной работы</li>
        </ul>
      </div>
    </section>
  );
};