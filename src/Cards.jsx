import React from 'react';
import './index.css';

function Cards(props){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} 
          alt="image"
          className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.cat}</h3>
          <a 
          href={props.linkSrc}
          target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
        </div>
      </div>
    </>
    );
}

export default Cards;