import React from 'react';
import styled from 'styled-components';
import { MapPin } from 'react-feather';

import Bust from '../Bust';
import { PostMeta } from '@/src/api';
const Wrapper = styled.section`
  display: flex;
  min-height: min(90vh, 800px);
  margin: 24px;
  color: var(--color-textPrimary);
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Row = styled.div`
  /* font-size: 1.5rem; */
  /* font-size: clamp(2rem, 2vw, 2.5rem); */
  font-size: clamp(1.5rem, 10.5vw - 1.75rem, 3.2rem);
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Merriweather = styled.div`
  font-family: var(--font-secondary);
`;

const Pink = styled.span`
  color: var(--color-accentPink);
`;

const LightPink = styled.span`
  color: var(--color-textSecondary);
`;

const Location = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 600;
  font-family: var(--font-secondary);
  color: var(--color-textPrimary);
  margin-top: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.div`
  cursor: pointer;
  padding: 0.5rem 2rem;
  border: 2px solid var(--color-textPrimary);
  font-weight: 600;
  border-radius: 3px;
`;

const Side = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ImageSide = styled.div`
  display: flex;
  justify-content: end;
  flex: 1;
  align-items: center;
`;
const BustWrapper = styled.div`
  position: relative;
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <Side>
        <Row>
          Hi, I am <Pink>Siva</Pink>
        </Row>
        <Row>
          <Merriweather>
            I <LightPink>design</LightPink>, <LightPink>develop</LightPink> and{' '}
            <LightPink>deploy</LightPink> websites.
          </Merriweather>
        </Row>

        <Location>
          <MapPin /> Hyderabad, IN
        </Location>
        <Buttons>
          <Button>gitHub</Button>
          <Button>twitter</Button>
        </Buttons>
      </Side>
      <ImageSide>
        {/* <BustWrapper>
          <Blob />
          <Bustjsx />
        </BustWrapper> */}
        <BustWrapper>
          <Bust />
        </BustWrapper>
      </ImageSide>
    </Wrapper>
  );
};

export default LandingPage;
