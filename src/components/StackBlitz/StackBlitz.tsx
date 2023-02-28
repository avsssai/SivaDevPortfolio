import styled from 'styled-components';

interface IProps {
  src: string;
}

const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
`;

const Embed = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default function StackBlitz({ src }: IProps) {
  return (
    <Wrapper>
      <Embed src={src} />
    </Wrapper>
  );
}
