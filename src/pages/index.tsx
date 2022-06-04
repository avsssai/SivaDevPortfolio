import type { NextPage } from 'next';
import styled from 'styled-components';
import Blog from '../components/Blog';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
const ApplicationWrapper = styled(MaxWidthWrapper)``;

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <ApplicationWrapper>
        <LandingPage />
        <Blog />
      </ApplicationWrapper>
    </div>
  );
};

export default Home;
