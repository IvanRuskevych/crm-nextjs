'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id); // імітуємо помилку роутінгу => замість id=number записати в роут id=string
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
}

export default Page;
