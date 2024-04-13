import React from 'react';
import ButtonForError from '@/app/components/button-for-error';

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <main>
      <h1 className={'text-xl'}>Dashboard Page</h1>
      <ButtonForError />
    </main>
  );
}

export default Page;
