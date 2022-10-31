import styled from 'styled-components';
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;

  margin: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  background: palevioletred;
  color: white;
`;

export default function ButtonComponent({ children }: { children: string }) {
  return (
    <>
      <Button>{children}</Button>
    </>
  );
}
