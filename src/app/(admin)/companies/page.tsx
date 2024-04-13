import React from 'react';
import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Company 1'}
          status={Status.Active}
          promotion={true}
          country={'USA'}
          joinedDate={'12-04-2024'}
        />
      </CompanyTable>
    </>
  );
}

export default Page;
