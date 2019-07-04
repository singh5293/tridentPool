import React, { FunctionComponent } from "react";

const AboutUs: FunctionComponent<{}> = () => {
  return (
    <div id="about">
      <div id="about-bg-diagonal" className="bg-parallax" />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="about-content-box">
              <div id="about-content-box-outer">
                <div id="about-content-box-inner">
                  <div
                    className="content-title wow animated fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <h3> About Trident Pool </h3>
                    <div className="content-title-underline" />
                  </div>

                  <div
                    id="about-desc"
                    className="wow animated fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <p>
                      we provide services like infinity pool jacuzzi, and
                      cuztomized pool of all the sizes in all major cities of
                      India
                    </p>
                  </div>

                  <div
                    id="about-btn"
                    className="wow animated fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutUs as default };
