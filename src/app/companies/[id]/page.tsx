import React from 'react';
import Header from '@/app/components/header';

//  папка [id] це динамічний параметр адреси типу "/1"

export interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

function Page({ params }: PageProps) {
  console.log('params.id', params.id);
  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
}

export default Page;
