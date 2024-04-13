'use client';

import React from 'react';

export interface GlobalErrorProps {}

function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>{'Something went wrong!!!'}</div>
      </body>
    </html>
  );
}

export default GlobalError;
