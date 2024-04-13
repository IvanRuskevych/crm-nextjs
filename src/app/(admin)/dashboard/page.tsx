import React from 'react';

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <main>
      <h1 className={'text-xl'}>Dashboard Page</h1>
    </main>
  );
}

export default Page;
