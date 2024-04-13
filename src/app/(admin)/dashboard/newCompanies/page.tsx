import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New companies</Header>
      <div>Some additional companies info</div>
    </>
  );
}

export default Page;
