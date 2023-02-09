import React from 'react';

import { Container, Photo, Description, Site, BoxLeft, Top, Title, VerifiedIcon, By, Desc, Release, Likes, Visited, Like, Looks, Heart, VisitedIcon, HeartIcon } from './styles';

import {dataPortfolio} from '../../DataPortfolio/dataPortfolio.js';

interface Props {
  title: string;
  image: string;
  by: string;
  description: string;
  date: string;
  link:string;
  hash: string;
}

const PagePortofolioMobile: React.FC<Props> = ({title, image, by, description, date, link, hash}) => {
  return (
    <Container>
        <BoxLeft>

          <Photo>
            <img src={image} alt="" />
          </Photo>

          <Description>
            <Top>
              <Title>
                <p>{title}</p>
                <VerifiedIcon />
              </Title>

              <p>&#x00023;{hash}</p>
            </Top>


            <By>
              By {by}
            </By>
            <Desc>
            {description}
            </Desc>

            <Release>
              RELEASE DATE: &nbsp;&nbsp;{date}
            </Release>

            <Likes>
              <Visited>
                <p>TOTAL VOLUME:</p>
                <Looks>
                  <VisitedIcon />
                  <p>38k</p>
                </Looks>
              </Visited>
              <Like>
                <p>TOTAL VOLUME:</p>
                <Heart>
                  <HeartIcon />
                  <p>38k</p>
                </Heart>
              </Like>

            </Likes>


          </Description>

        </BoxLeft>
      <Site>
        <a href={link} target="_blank">Link</a>
      </Site>
    </Container>
  );
}

export default PagePortofolioMobile;
