import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            srcSet={`
              ${src.replace('.jpg', '.avif')},
              ${src.replace('.jpg', '@2x.avif')},
              ${src.replace('.jpg', '@3x.avif')},
            `}          
          />
          <Image alt={tags[0]} src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
object-fit: cover;
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tag = styled.span`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  line-height: 2;
  list-style: none;
  margin-right: 8px;
  height: 24px;
`;

export default PhotoGridItem;
