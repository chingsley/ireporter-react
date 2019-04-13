import React from 'react';

const SectionAbout = () => (
  <section className="section-about">
    <div className="margin-div">
      <div className="u-center-text u-margin-bottom-medium u-margin-top-big">
        <h2 className="heading-secondary-dark">
          We have one job: developing Africa
        </h2>
      </div>
      <div className="row flex-box">
        <div className="col-1-of-2">
          <div className="info">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Take a step towards ending corruption
            </h3>
            <p className="paragraph">
              Corruption denies us the basic ammenities, corruption denies
              persons living with disabilities friendly facilities. Report any
              corrupt practice and let us build a better world together!
            </p>
          </div>
          <div className="info u-margin-bottom-medium">
            <h3 className="heading-tertiary u-margin-bottom-small">
              We can help, if only you would let us know
            </h3>
            <p className="paragraph">
              Recent research indicates that by 2020, more than 20,000 families
              could be affected by severe flood and communal clashes. Help us
              prevent this. Start by telling us what needs to be fixed right now
              in your area. Help is one click away!
            </p>
          </div>

          <div className="link-container">
            <a href="#card-info" className="link" id="link-on-white-bg">
              Learn more &rarr;
            </a>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="img-gallery">
            <img
              src="img/13477493.jpg"
              alt="alt 1"
              className="img-in-gallery img-in-gallery-1"
            />
            <img
              src="img/images (2).jpeg"
              alt="alt 2"
              className="img-in-gallery img-in-gallery-2"
            />
            <img
              src="img/images.jpeg"
              alt="alt 3"
              className="img-in-gallery img-in-gallery-3"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectionAbout;
