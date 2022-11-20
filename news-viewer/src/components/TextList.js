import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextItem from './TextItem';
import { dummy } from '../dummy';

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
  const [writer, setWriter] = useState(dummy);

  useEffect(() => {
    console.log(1);
    setWriter(dummy);
  });
  console.log(2);
  return (
    <TextItemBlock>
      <TextItem data={writer.data[0]} />
      <TextItem data={writer.data[1]} />
      <TextItem data={writer.data[2]} />
      <TextItem data={writer.data[3]} />
      <TextItem data={writer.data[4]} />
      <TextItem data={writer.data[5]} />
      <TextItem data={writer.data[6]} />
    </TextItemBlock>
  );
};

export default TextList;
