import * as React from 'react';
import format from 'date-fns/format';
import styled from 'styled-components';
export interface IDateProps {
  date: string;
}

const DateWrapper = styled.div`
  color: var(--color-textPrimary);
  font-weight: 600;
  font-size: 0.9rem;
`;
export default function DateDisplay(props: IDateProps) {
  const { date } = props;
  const dateInQuestion = new Date(date);
  const formattedDate = format(dateInQuestion, 'PPP');
  return <DateWrapper>{formattedDate}</DateWrapper>;
}
