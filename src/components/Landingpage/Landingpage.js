import React, { Component } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

const values = ["Webapps", "UI", "Mobile Apps", "Animated"];

const Example = () => {
  const { result, dencrypt } = useDencrypt();
  React.useEffect(() => {
    let i = 0;
    dencrypt(values[0])
    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2500);

    return () => clearInterval(action);
  }, []);

  return <span>{result}</span>;
};
export default class Landingpage extends Component {
  render() {
    return (
      <div className="navbar-offset-top min100vh d-flex top-jumbotron pr container-fluid section1">
        <div className="row align-self-center w-100 align-items-center justify-content-center headerText">
          <div className="mx-auto col-sm-7 col-md-7 col-9 ">
            <div className="timeline">
              <div className="timeline_bullet"></div>
              <a href="#work" className="scroll_section">
                <div className="scroll-down">
                  <span>Scroll</span>
                </div>
              </a>
            </div>
            <span>
              <div className="block-reveal block-reveal--active">
                <span className="block-reveal__block white"></span>{' '}
                <small
                  id="first-element"
                  className="block-reveal__text section-title mb-3 pb-3"
                >
                  Start /&gt;
                </small>
              </div>
            </span>
            <br />
            <div className="block-reveal block-reveal--active">
              <span className="block-reveal__block"></span>{' '}
              <h1 className="block-reveal__text subtitle mb-0">
                Hi, my name is <strong className="cyan">Naresh</strong>
                <br />
              </h1>
            </div>
            <br />
            <div className="block-reveal block-reveal--active">
              <span className="block-reveal__block"></span>{' '}
              <h1 className="block-reveal__text subtitle mt-0 ws-nowarp">
                i <em className="serif normal">design</em> and{' '}
                <span className="mono fat">develop</span>{' '}
                <Example />
                {/* <span className="anim-txt">webapps</span> */}
                
              </h1>
            </div>
            <br />
            <div className="block-reveal block-reveal--active">
              <span className="block-reveal__block white"></span>{' '}
              <p className="color-gray mt-2 pb-3 block-reveal__text">
                Let me show You...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
