'use client';

import React from 'react';
import Button from '@/app/components/button';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>`Unexpected Error inside slot sales: {error.message}`</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}

export default Error;
