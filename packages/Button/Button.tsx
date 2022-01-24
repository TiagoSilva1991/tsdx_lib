import React from 'react';
import { Props } from './Button.types';

function Button({
  disabled, text, onClick, ...props
}: Props) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className="test" {...props}>
      {text} text
    </button>
  );
}

export default Button;
