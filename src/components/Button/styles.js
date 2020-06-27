import styled from 'styled-components';

export const Btn = styled.button`
  font-size: 1.4em;
  padding: 4px 8px;
  text-align: center;
  vertical-align: center;

  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  background-color: var(--bg-button);

  &.operation {
    color: #fff;
    background-color: #fa8231;
  }

  &:active {
    background-color: #ccc;

    &.operation {
      background-color: #fa8231cc;
    }
  }

  &.double {
    grid-column: span 2;
  }

  &.triple {
    grid-column: span 3;
  }
`;
