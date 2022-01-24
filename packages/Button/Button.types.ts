import { MouseEventHandler } from 'react';

export interface Props {
  /**
   * Simple text
   */
  text: string;
  /**
   * Simple handle disabled status
   */
  disabled?: boolean;
  /**
   * Simple handle click
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
