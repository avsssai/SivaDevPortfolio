import styled, { StyledComponent } from 'styled-components';
import { QUERIES } from '../../styles/constants';

const MaxWidthWrapper = styled.div`
  position: relative;
  max-width: min(100%, (1200px + 32px * 2));
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export default MaxWidthWrapper;
