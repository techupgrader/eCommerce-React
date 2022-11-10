/* eslint-disable react/prop-types */
import styled from '@emotion/styled';

const ButtonStyle = styled('button')({
  border: '1px solid #D2D2D2',
  borderRadius: '20px',
  color: '#ABABAB',
  marginRight: '4px',
  marginBottom: '4px',
  padding: '2px 16px'
});
export default function KeyButton({ title }) {
  return <ButtonStyle>{title}</ButtonStyle>;
}
