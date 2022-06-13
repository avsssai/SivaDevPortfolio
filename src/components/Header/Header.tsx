import React from 'react';
import Image from 'next/image';
import useDarkMode from '../../hooks/useDarkMode';
import styled from 'styled-components';
import { Moon } from 'react-feather';
import bust from '../../assets/bust-2.svg';
import Link from 'next/link';

export default function Header(): JSX.Element {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const size = 50;
  return (
    <HeaderWrapper>
      <Logo>
        <ImageContainer>
          <Link href="/">
            <Image
              src={bust}
              alt="cartoon of Siva"
              width={size}
              height={size}
            />
          </Link>
        </ImageContainer>
        <Name>
          <Link href="/">Siva Sesha Sai</Link>
        </Name>
      </Logo>
      <HeaderRightContent>
        {/* <Item>
          <Link href="/about">about</Link>
        </Item> */}
        <Item>
          <Link href="/blog">blog</Link>
        </Item>
        <Item>
          {/* 
  // @ts-ignore */}
          <Moon onClick={toggleDarkMode} />
        </Item>
      </HeaderRightContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-textPrimary);
  margin-bottom: 2rem;
`;
const Logo = styled.span`
  font-family: var(--font-secondary);
  color: var(--color-textPrimary);
  font-size: 1rem;
  margin-left: 24px;
  font-weight: 700;
  @media (min-width: 640px) {
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
`;
const HeaderRightContent = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.725rem;
  margin-right: 24px;
  font-family: inherit;
  font-weight: 600;
  color: var(--color-textPrimary);
  align-items: center;
  @media (min-width: 640px) {
    gap: 32px;
    font-size: 1rem;
  }
`;

const Name = styled.div`
  & a {
    color: inherit;
    text-decoration: none;
  }
`;
const ImageContainer = styled.div`
  display: none;
  cursor: pointer;
  @media (min-width: 640px) {
    display: block;
  }
`;

const Item = styled.span`
  cursor: pointer;
  & a {
    color: inherit;
    text-decoration: none;
  }
`;
