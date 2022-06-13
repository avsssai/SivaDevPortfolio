import styled from 'styled-components';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Container = styled(MaxWidthWrapper)`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
`;
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  pointer-events: none;
`;

export default function Gif({ id }: { id: string }) {
  return (
    <Container>
      <Iframe
        src={`https://giphy.com/embed/${id}`}
        width="480"
        height="480"
        frameBorder="0"
        allowFullScreen
      ></Iframe>
    </Container>
  );
}
