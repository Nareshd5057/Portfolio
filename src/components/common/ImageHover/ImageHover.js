import React, { Component } from 'react';
import Tilt from 'react-parallax-tilt';
export default class ImageHover extends Component {
  render() {
    return (
      <div class="project-box h" style = {this.props.style}>
        {/* <div class="spinner-border-wrp">
                <span role="status" class="spinner-border">
                  <span class="sr-only">Spinning</span>
                </span>
              </div> */}{' '}
        <Tilt
          className={'parallax-effect-img project-image ' + this.props.imgClass}
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
          width={500}
          height={500}
          transitionSpeed={1000}
        >
          <div class="project-meta inner-element">
            <div class="block-reveal projects block-reveal--active">
              <span class="block-reveal__block white"></span>{' '}
              <span class="block-reveal__text">
                <br />
                Hotel
                <br />z Rowerem
              </span>
            </div>{' '}
            <div class="divider"></div>{' '}
            <div class="project-nav block-reveal block-reveal--active">
              <span class="block-reveal__block"></span>{' '}
              <span class="block-reveal__text">
                01
                <br /> <span class="arr">→</span>
              </span>
            </div>
          </div>
        </Tilt>
      </div>
    );
  }
}
