import { MouseEventHandler } from 'react';

type ButtonProps = {
  classButton: string;
  children: any;
  click?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ classButton, children, click }: ButtonProps) {
  return (
    <button className={classButton} onClick={click}>
      {children}
    </button>
  );
}
