import React from 'react';
import Link from 'next/link';

export interface NotFoundProps {}

function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Could not found company</p>
      <Link href="/companies" className={'text-blue-500'}>
        Back to companies list
      </Link>
    </div>
  );
}

export default NotFound;
