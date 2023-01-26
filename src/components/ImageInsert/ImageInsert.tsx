import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div``;

interface IProps {
  height: number;
  width: number;
  src: string;
  alt: string;
}

export default function ImageInsert(props: IProps) {
  const { alt, ...restOfProps } = props;
  return (
    <Wrapper>
      <Image {...restOfProps} alt={alt} />
    </Wrapper>
  );
}
