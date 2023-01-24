import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeDescSpan, HomeBtn } from './style';

const Home = () => {
    return (
      <HomeSection>
          <div className="container">
              <HomeInformation>
                  <HomeTitle className="margin-bottom">Hamza Nabil</HomeTitle>
                  <HomeInfo className="home-info">Creative Director</HomeInfo>
                  <HomeDesc>
                      Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                  </HomeDesc>
                  <HomeBtn className="home-btn">Let's Begin</HomeBtn>
              </HomeInformation>
          </div>
      </HomeSection>
    );
};

export default Home;
