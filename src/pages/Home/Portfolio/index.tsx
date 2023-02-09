import React from 'react';

import { Container } from './styles';
import PagePortofolio from '../../../components/PagePortofolio';
import Copyright from '../../../components/Copyright';
import PagePortofolioMobile from '../../../components/PagePortfolioMobile';
import { dataPortfolio } from '../../../DataPortfolio/dataPortfolio';

const Portfolio: React.FC = () => {
  return (

    <Container>
        <h1>Portfolio</h1>

        <>
          {dataPortfolio.map((data, index) => {
            return(
              <PagePortofolio key={index} hash={data.hash} title={data.title} image={data.image} by={data.by} description={data.description}  date={data.date} link={data.link}/>
            )
          })}
        </>

        <>
          {dataPortfolio.map((data, index) => {
            return(
              <PagePortofolioMobile key={index} hash={data.hash} title={data.title} image={data.image} by={data.by} description={data.description}  date={data.date} link={data.link}/>
            )
          })}
        </>





        <Copyright />




    </Container>

    );
}

export default Portfolio;

