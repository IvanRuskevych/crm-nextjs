import React from 'react';
import Header from '@/app/components/header';

//  папка [...ids] це динамічний параметр адреси типу "/1/3/2" і тд

export interface PageProps {
  params: { ids: string[] };
}

function Page({ params }: PageProps) {
  console.log('params.ids', params.ids);
  return (
    <>
      <Header>Companies ({String(params.ids)})</Header>
    </>
  );
}

export default Page;
