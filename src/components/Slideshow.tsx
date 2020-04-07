import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { DefaultPlayer } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Avatar from './Profile/Avatar';

interface Slideshow {
  URIs: string[];
}

class Slideshow extends Component {
  render() {
    return (
      <Carousel arrows clickToChange>
        <DefaultPlayer
          muted
          controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
          poster="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm"
        >
          <source src="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" type="video/webm" />
        </DefaultPlayer>
        <DefaultPlayer
          muted
          controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
          poster="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm"
        >
          <source src="http://dl5.webmfiles.org/elephants-dream.webm" type="video/webm" />
        </DefaultPlayer>
        <Avatar />
      </Carousel>
    );
  }
}
export default Slideshow;
