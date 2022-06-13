import { QUERIES } from '@/src/styles/constants';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <NameSplit>
        <Row>Siva</Row>
        <Row>Sesha</Row>
        <Row>Sai</Row>
        <CopyRight>
          <span>&#169;</span> Copyright 2021
        </CopyRight>
      </NameSplit>
      <NavLinks>
        <LinkItem>
          <Link href="/">Home</Link>
        </LinkItem>
        <LinkItem>{/* <Link href="/about">About</Link> */}</LinkItem>
        <LinkItem>
          <Link href="/blog">Blog</Link>
        </LinkItem>
      </NavLinks>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--color-textSecondary);
  font-family: var(--font-secondary);
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const NameSplit = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  color: var(--color-background);
`;
const Row = styled.div`
  font-weight: 900;
  font-size: 2rem;
`;
const CopyRight = styled.div`
  color: var(--color-background);
  display: flex;
  margin-top: 0.5rem;
  gap: 0.2rem;
  & > span {
    line-height: 1.4;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: revert;
    margin-top: auto;
    gap: 1.5rem;
    font-size: 1.5rem;
  }
`;
const LinkItem = styled.div`
  & a {
    color: var(--color-background);
  }
  & a:hover {
    text-decoration: none;
  }
`;
export default Footer;
