import type { NextPage } from 'next';
import styled from 'styled-components';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

const ApplicationWrapper = styled(MaxWidthWrapper)``;

const Home: NextPage = () => {
  return (
    <div>
      <ApplicationWrapper>
        <h1>My Blog</h1>
      </ApplicationWrapper>
    </div>
  );
};

export default Home;
