import React from 'react';

import { Container, Photo, Description, Site, BoxLeft, Top, Title, VerifiedIcon, By, Desc, Release, Likes, Visited, Like, Looks, Heart, VisitedIcon, HeartIcon } from './styles';


interface Props {
  title: string;
  image: string;
  by: string;
  description: string;
  date: string;
  link:string;
  hash: string;
}

const PagePortofolio: React.FC<Props> = ({title, image, by, description, date, link, hash}) => {
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
                <p>VISITED:</p>
                <Looks>
                  <VisitedIcon />
                  <p>0</p>
                </Looks>
              </Visited>
              <Like>
                <p>LIKES:</p>
                <Heart>
                  <HeartIcon />
                  <p>0</p>
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

export default PagePortofolio;
