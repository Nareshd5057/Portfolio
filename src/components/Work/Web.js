import React, { Component } from 'react';
import Tilt from 'react-parallax-tilt';
import imgTree from '../../assets/img/web1.jpg';

export default class Web extends Component {
  render() {
    return (
      <div id="web" className="mb-3">
        <div className="row align-self-top w-100 pt-3 mt-3 mb-3 projects-row">
          <div
            id="national-geographic-learning"
            class="mx-auto pt-0 offseted justify-content-center d-flex workboxcol col-sm-10 col-md-5"
          >
            <div
              aria-label="National<br />Geographic<br />Learning"
              data-tilt=""
              data-tilt-gyroscope="false"
              data-tilt-scale="1.05"
              data-tilt-speed="200"
              data-tilt-glare="true"
              data-tilt-max-glare="0.2"
              data-tilt-perspective="700"
              data-hover=""
              class="project-box h"
            >
              <div class="spinner-border-wrp">
                <span role="status" class="spinner-border">
                  <span class="sr-only">Spinning</span>
                </span>
              </div>{' '}
              <div class="block-reveal projects block-reveal--active">
                <span class="block-reveal__block white"></span>{' '}
                <span class="block-reveal__text">
                  <div
                    class="project-image"
                    data-src="/assets/img/38b89a4.jpg"
                    lazy="loaded"
                    //   style='background-image: url("/assets/img/38b89a4.jpg");'
                  ></div>
                </span>
              </div>{' '}
              <div class="project-meta">
                <div class="block-reveal projects block-reveal--active">
                  <span class="block-reveal__block white"></span>{' '}
                  <span class="block-reveal__text">
                    National
                    <br />
                    Geographic
                    <br />
                    Learning
                  </span>
                </div>{' '}
                <div class="divider"></div>{' '}
                <div class="project-nav block-reveal block-reveal--active">
                  <span class="block-reveal__block"></span>{' '}
                  <span class="block-reveal__text">
                    00
                    <br /> <span class="arr">→</span>
                  </span>
                </div>
              </div>
              <div
                class="js-tilt-glare"
                //   style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none;"
              >
                <div
                  class="js-tilt-glare-inner"
                  // style="position: absolute; top: 50%; left: 50%; pointer-events: none; background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%); width: 820px; height: 820px; transform: rotate(180deg) translate(-50%, -50%); transform-origin: 0% 0%; opacity: 0;"
                ></div>
              </div>
            </div>
          </div>
          <div
            id="hotel-z-rowerem"
            class="mx-auto pt-0 offseted justify-content-center d-flex workboxcol col-sm-10 col-md-4"
          >
            <div
              aria-label="<br />Hotel<br />z Rowerem"
              data-tilt=""
              data-tilt-gyroscope="false"
              data-tilt-scale="1.05"
              data-tilt-speed="200"
              data-tilt-glare="true"
              data-tilt-max-glare="0.2"
              data-tilt-perspective="700"
              data-hover=""
              class="project-box h"
              style={{ marginTop: '280px', marginLeft: '-160px' }}
              className="w100 h300"
            >
              <div class="spinner-border-wrp">
                <span role="status" class="spinner-border">
                  <span class="sr-only">Spinning</span>
                </span>
              </div>{' '}
              <div class="block-reveal projects block-reveal--active w100">
                <span class="block-reveal__block white"></span>{' '}
                <span class="block-reveal__text">
                  <Tilt
                    className="parallax-effect-img"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    width={500}
                    height={500}
                  >
                    {/* <img src={imgTree} className="inner-element" alt="pic" /> */}
                    <div className="inner-element">
                      <div>React</div>
                      <div>Parallax Tilt</div>
                      <div>👀</div>
                    </div>
                  </Tilt>
                </span>
              </div>{' '}
              <div class="project-meta">
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
              <div
                class="js-tilt-glare"
                //   style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none;"
              >
                <div
                  class="js-tilt-glare-inner"
                  // style="position: absolute; top: 50%; left: 50%; pointer-events: none; background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%); width: 820px; height: 820px; transform: rotate(180deg) translate(-50%, -50%); transform-origin: 0% 0%; opacity: 0;"
                ></div>
              </div>
            </div>
          </div>
          <div
            id="decablog"
            class="mx-auto pt-0 offseted justify-content-center d-flex workboxcol col-sm-10 col-md-3"
          >
            <div
              aria-label="<br /><br />Decablog"
              data-tilt=""
              data-tilt-gyroscope="false"
              data-tilt-scale="1.05"
              data-tilt-speed="200"
              data-tilt-glare="true"
              data-tilt-max-glare="0.2"
              data-tilt-perspective="700"
              data-hover=""
              class="project-box v"
              style={{ marginTop: '130px', marginLeft: '20px' }}
            >
              <div class="spinner-border-wrp">
                <span role="status" class="spinner-border">
                  <span class="sr-only">Spinning</span>
                </span>
              </div>{' '}
              <div class="block-reveal projects block-reveal--active">
                <span class="block-reveal__block white"></span>{' '}
                <span class="block-reveal__text">
                  <div
                    class="project-image"
                    data-src="/assets/img/878209f.jpg"
                    lazy="loaded"
                    // style='background-image: url("/assets/img/878209f.jpg");'
                  ></div>
                </span>
              </div>{' '}
              <div class="project-meta">
                <div class="block-reveal projects block-reveal--active">
                  <span class="block-reveal__block white"></span>{' '}
                  <span class="block-reveal__text">
                    <br />
                    <br />
                    Decablog
                  </span>
                </div>{' '}
                <div class="divider"></div>{' '}
                <div class="project-nav block-reveal block-reveal--active">
                  <span class="block-reveal__block"></span>{' '}
                  <span class="block-reveal__text">
                    02
                    <br /> <span class="arr">→</span>
                  </span>
                </div>
              </div>
              <div
                class="js-tilt-glare"
                // style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none;"
              >
                <div
                  class="js-tilt-glare-inner"
                  //   style="position: absolute; top: 50%; left: 50%; pointer-events: none; background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%); width: 460px; height: 460px; transform: rotate(180deg) translate(-50%, -50%); transform-origin: 0% 0%; opacity: 0;"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
