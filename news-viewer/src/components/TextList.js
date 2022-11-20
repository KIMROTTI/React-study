import React from 'react';
import styled from 'styled-components';
import TextItem from './TextItem';

const TextItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    wdith: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const TextList = () => {
  return (
    <TextItemBlock>
      <TextItem data={sampleArticle} />
      <TextItem data={sampleArticle} />
      <TextItem data={sampleArticle} />
      <TextItem data={sampleArticle} />
      <TextItem data={sampleArticle} />
      <TextItem data={sampleArticle} />
    </TextItemBlock>
  );
};

export default TextList;
