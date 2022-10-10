import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.css'

const base_url = "https://image.tmdb.org/t/p/original/";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
        <img
          src={`${base_url}${movie.poster_path}`}
          alt={movie.original_title}
        />
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
