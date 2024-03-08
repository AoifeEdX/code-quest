import React from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FilmSlider = ({ films, handleViewVideo }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {films.map(film => (
        <div key={film.identifier} className="film-card-container">
          <div className="film-card m-1 p-4 rounded bg-secondary bg-opacity-25 h-full">
            <div className="flex flex-col h-full">
              <div className="mt-2">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://archive.org/embed/${film.identifier}`}
                  allowFullScreen
                ></iframe>
                <p className="fs-5">{film.title}</p>
              </div>
              <div className="flex justify-center mt-auto">
                <Button className="gradient-bg-blue rounded-pill px-2" onClick={() => handleViewVideo(film)}>
                  View Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FilmSlider;
