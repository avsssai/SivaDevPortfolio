import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';

const Wrapper = styled(MaxWidthWrapper)``;
interface Props {
  children: JSX.Element | JSX.Element[];
}
const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;
