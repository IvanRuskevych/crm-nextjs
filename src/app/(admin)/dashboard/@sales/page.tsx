import React from 'react';
import { getSummaryCategories, getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';
import ButtonForError from '@/app/components/button-for-error';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales(); // getting data as usual
  // const data = await new Promise(resolve =>
  //   setTimeout(() => resolve(getSummarySales()))
  // );

  return (
    <DashboardCard
      // label="Sales details"
      label={
        <>
          Sales details
          <ButtonForError />
        </>
      }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
