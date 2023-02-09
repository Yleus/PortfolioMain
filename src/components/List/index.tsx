import React, { useEffect, useState } from 'react';

import { Container, Item, Title } from './styles';



interface Props {
    title: string,

}

interface Article {
  title: string,
  description: string,
  url: string,

}

const List: React.FC<Props> = ({
    title
}) => {
    const url = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=7&apiKey=73779f463b204e5d8dc84274f03cb51a";
    const [dataNews, setDataNews] = useState<Article[]>([]);



    useEffect (() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setDataNews(data.articles);


        } catch (error) {
          console.log(error);
        }

      }
      fetchData();


    }, []);

  return (
    <Container>
        <Item>
            <Title>{title}</Title>
        </Item>


      {dataNews && dataNews.map((dataNew, i) => (
        <Item key={i}>
          <a href={dataNew.url} target="__blank">
            <h4>{dataNew.title}</h4>
            <h5>{dataNew.description}</h5>
          </a>
        </Item>

      ))}





    </Container>
  );
}

export default List;
