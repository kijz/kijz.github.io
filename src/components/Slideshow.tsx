import React, { useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import YouTube from 'react-youtube';

export interface VideoSource {
  title: string;
  videoId: string;
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
          <React.Fragment key={entry.videoId}>
            {currentSlide === index && (
              <YouTube
                opts={{ playerVars: { modestbranding: 1 } }}
                containerClassName="youtube"
                videoId={entry.videoId}
              />
            )}
          </React.Fragment>
        ))}
      </Carousel>
      <Dots value={currentSlide} onChange={onChange} number={entries.length} />
    </>
  );
};
export default Slideshow;
