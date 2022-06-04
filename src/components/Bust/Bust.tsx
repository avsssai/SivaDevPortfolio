import React from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import Bustjsx from './Bustjsx';

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
`;

const BlobWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
`;
const BustjsxWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  /* top: -48%;
  left: -7%; */
  /* top: -150px;
  left: -30px; */
  bottom: -15px;
  left: -10px;
`;

const Bust = (): JSX.Element => {
  return (
    <Wrapper>
      <BustjsxWrapper>
        <Bustjsx />
      </BustjsxWrapper>
      <BlobWrapper>
        <Blob />
      </BlobWrapper>
    </Wrapper>
  );
};

export default Bust;
