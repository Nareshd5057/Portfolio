import React, { Component } from 'react';
import Web from './Web';
import Lab from './Lab/Lab';

export default class Work extends Component {
  render() {
    return (
      <div id="work" className="min100vh work container-fluid">
        <div class="row align-self-top w-100 align-items-start justify-content-center">
          <div class="mx-auto pt-0 offseted col-sm-7 col-md-7 col-9">
            <div class="timeline alt"></div>{' '}
            <small class="section-title bullet-title alt">Work /&gt;</small>{' '}
            <h4>Selected web, mobile, video projects...</h4>
          </div>
        </div>
        <Web />
        <Lab />
      </div>
    );
  }
}
