import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
export interface ITagsProps {
  tags: string[];
}

const Tags = styled.div`
  display: flex;
  gap: 0.825rem;
  width: min(100%, 600px);
  flex-wrap: wrap;
  line-height: 0.8rem;
  & a {
    color: inherit;
    text-decoration: none;
  }
  & a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Tag = styled.div`
  color: var(--color-textPrimary);
  font-weight: 300;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  border: 1px dotted var(--color-textPrimary);
  padding: 0.4rem;
`;

export default function TagsComponent(props: ITagsProps) {
  const { tags } = props;
  return (
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag}>
          <Link href={`/tags/${tag}`}>{tag}</Link>
        </Tag>
      ))}
    </Tags>
  );
}
