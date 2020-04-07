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
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  // we check if we got event from input (and it has target property) or just value from Carousel
  onChange = value => this.setState({ value });
  render() {
    return (
      <>
        <Carousel arrows value={this.state.value} onChange={this.onChange}>
          <DefaultPlayer
            key={1}
            muted
            controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
            poster="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm"
          >
            <source src="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" type="video/webm" />
          </DefaultPlayer>
          <Avatar key={2} />
          <DefaultPlayer
            key={3}
            muted
            controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
            poster="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm"
          >
            <source src="http://dl5.webmfiles.org/elephants-dream.webm" type="video/webm" />
          </DefaultPlayer>
        </Carousel>
        <Dots value={this.state.value} onChange={this.onChange} number={3} />
      </>
    );
  }
}
export default Slideshow;
