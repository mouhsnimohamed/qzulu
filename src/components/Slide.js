import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const CarouselUI = ({ position, handleClick, children }) => (
  <div className="slider">
    {children}
    <div onClick={handleClick} data-position={position - 1}>
      {'< prev'}
    </div>
    <div right onClick={handleClick} data-position={position + 1}>
      {'next >'}
    </div>
  </div>
);
const Carousel = makeCarousel(CarouselUI);

const Slider = ({ slideItems }) => (
  <Carousel defaultWait={5000}>
    {slideItems.map(item => (
      <Slide right key={item.text}>
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block'
              }}>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
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
