import React from 'react';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category={'Products'}
        company={'Company 1'}
        status={Status.Pending}
        promotion={true}
        country={'USA'}
        joinedDate={'12-04-2024'}
      />
    </CompanyTable>
  );
}

export default Page;
