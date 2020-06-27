import React from 'react';

import { Disp } from './styles';

export default function Display(props) {
  return (
    <>
      <Disp>{props.value}</Disp>
    </>
  );
}
