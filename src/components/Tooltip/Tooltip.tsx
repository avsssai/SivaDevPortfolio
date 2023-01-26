import * as React from 'react';
import styled from 'styled-components';

export interface IToolTipProps {
  heading?: string;
  content: string;
}

export default function ToolTip(props: IToolTipProps) {
  return (
    <ToolTipWrapper>
      <ToolTipLabel>Tooltip!</ToolTipLabel>
      {props?.heading && <ToolTipHeading>{props?.heading}</ToolTipHeading>}
      <ToolTipContent>{props.content}</ToolTipContent>
    </ToolTipWrapper>
  );
}

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ToolTipWrapper = styled(ContentWrapper)`
  background-color: var(--color-accentYellow);
  color: var(--color-background);
  padding: 1rem;
  border-radius: 10px;
`;

const ToolTipLabel = styled.h4`
  text-decoration: underline;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem !important;
`;

const ToolTipHeading = styled.h6`
  margin-bottom: 0.1rem !important;
  font-size: 1rem !important;
`;
const ToolTipContent = styled.p`
  font-size: 1rem !important;
  margin-bottom: 0 !important;
`;
