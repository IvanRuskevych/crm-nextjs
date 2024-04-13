'use client';
import Button, { ButtonProps } from '@/app/components/button';
import { useLayoutEffect, useState } from 'react';

function ButtonForError(props: ButtonProps) {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 1) {
      throw new Error('Unexpected error occurred.');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Click twice to create Error
    </Button>
  );
}

export default ButtonForError;
