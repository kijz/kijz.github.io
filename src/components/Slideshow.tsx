import React, { useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export interface VideoSource {
  poster: string;
  source: string;
}

interface Props {
  entries: VideoSource[];
}

const Slideshow: React.FC<Props> = ({ entries }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const onChange = (value: number) => setCurrentSlide(value);

  return (
    <>
      <Carousel arrows value={currentSlide} onChange={onChange}>
        {entries.map((entry, index) => (
          <video key={index} poster={entry.poster} controls muted>
            <source src={entry.source} type="video/mp4" />
          </video>
        ))}
      </Carousel>
      <Dots value={currentSlide} onChange={onChange} number={entries.length} />
    </>
  );
};
export default Slideshow;
