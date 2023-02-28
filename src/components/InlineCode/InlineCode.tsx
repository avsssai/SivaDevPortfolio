import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  display: inline;
  background-color: #3f3c3c;
  color: white;
  padding-left: 4px;
  padding-right: 4px;
  font-family: monospace;
`;

interface IProps {
  children: React.ReactNode;
}

export default function InlineCode({ children }: IProps) {
  return <Code>{children}</Code>;
}
