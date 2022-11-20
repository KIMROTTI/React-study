import React from 'react';
import styled from 'styled-components';

const TextItemBlock = styled.div`
  display: flex;
  .thumbnail {
    img {
      margin-right: 1rem;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: block;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export default function TextItem({ data }) {
  const { title, description, url, urlToImage } = data;
  return (
    <TextItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail"></img>
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </TextItemBlock>
  );
}
