import React from 'react';
import Back from '../img/back.svg';
import Next from '../img/next.svg';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const CarouselUI = ({ position, handleClick, children }) => (
  <div className="slider">
    {children}
    <div
      className="arows prev"
      onClick={handleClick}
      data-position={position - 1}>
      <img alt="" src={Back} />
    </div>
    <div
      className="arows next"
      onClick={handleClick}
      data-position={position + 1}>
      <img alt="" src={Next} />
    </div>
  </div>
);
const Carousel = makeCarousel(CarouselUI);

const Slider = ({ slideItems }) => (
  <Carousel defaultWait={60000}>
    {slideItems.map(item => (
      <Slide right key={item.text}>
        <div className="slide-container">
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={item} />
          </div>

          <p className="is-size-2">{item.text}</p>
        </div>
      </Slide>
    ))}
  </Carousel>
);

Slider.propTypes = {
  slideItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default Slider;
