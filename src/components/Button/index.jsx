import React from 'react';

import { Btn } from './styles';

export default function Button(props) {
  let classNameBtn = props.operation
    ? 'operation'
    : props.double
    ? 'double'
    : props.triple
    ? 'triple'
    : '';

  return (
    <>
      <Btn
        className={classNameBtn}
        // onClick={(e) => props.click(e.target.innerHTML)}
        onClick={(e) => props.click(props.label)}
      >
        {props.label}
      </Btn>
    </>
  );
}
