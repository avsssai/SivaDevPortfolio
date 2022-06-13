import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import Footer from '../Footer';

const Wrapper = styled(MaxWidthWrapper)`
  min-height: calc(100vh - 240px);
`;
interface Props {
  children: JSX.Element | JSX.Element[];
}
const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
