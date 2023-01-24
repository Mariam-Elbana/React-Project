import React from 'react';
import { AboutSection, AboutInfo, InfoTitle, InfoTitleSpan, InfoDir, InfoDesc, InfoDescA } from './style.js';

const About = () => {
    return (
      <AboutSection>
        <div className="container">
          <AboutInfo>
              <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
              <InfoDir>About Director</InfoDir>
              <InfoDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescA href="#">explicabo</InfoDescA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
              </InfoDesc>
              <InfoDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
              </InfoDesc>
          </AboutInfo>
        </div>
      </AboutSection>
    );
};

export default About;
