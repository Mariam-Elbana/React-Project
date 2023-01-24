import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {PortfolioSection, PortfolioTitle, PortfolioTitleSpan, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan} from './style.js';

const Portfolio = () => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    axios.get("Js/data.json").then(res => {
      setImages(res.data.portfolio);
    });
  }, [] );

  const portfolioImages = images.map( (imageItem) => {
    return(
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt=""/>
        <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  })

  return (
    <PortfolioSection>
      <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
      
      <div className="box">

        {portfolioImages}
      
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
