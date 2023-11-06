import React from 'react';
import Questions from '../questions';
import './style.css';

const Card = ({ title, description, url, score, questions_answers }) => {
  return (
    <div className="card">
      <div class="container">
        <iframe
          width="100%"
          height="300"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <div className='card-content'>
          <div className='text-container'>
            <p className='text-bold'>title:</p>
            <p className="text-normal">{title}</p>
          </div>
          <div className='text-container'>
            <p className='text-bold'>description:</p>
            <p className="text-normal">{description}</p>
          </div>
          <div className='text-container'>
            <p className='text-bold'>Score:</p>
            <p className="text-normal">{score === null ? '---' : score}</p>
          </div>
        </div>
        <Questions questions={questions_answers} />
      </div>
    </div>
  );
};

export default Card;
