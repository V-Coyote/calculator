import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 72px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
`;

export const Calc = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;

  width: 235px;
  height: 320px;
  border-radius: 5px;

  overflow: hidden;
  margin-top: 16px;

  button {
  }
`;
