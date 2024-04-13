// import { Status, StatusLabel } from '@/app/components/status-label';
import { headers } from 'next/headers';
import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  // Static Dynamic Rendering => викликаємо наприклад функцію headers()
  // Завдяки цьому ми отримаємо нову дату при кожному оновленні сторінки
  // console.log('headers', headers());

  return (
    <main>
      {/*Static Rendering*/}
      {/*<h1 className={'text-xl'}>Home page {new Date().toTimeString()}</h1>*/}
      {/*<StatusLabel status={Status.Active}>Active</StatusLabel>*/}
      {/*<StatusLabel status={Status.NotActive}>Not Active</StatusLabel>*/}
      {/*<StatusLabel status={Status.Pending}>Pending</StatusLabel>*/}
      {/*<StatusLabel status={Status.Suspended}>Suspended</StatusLabel>*/}

      {/* Client Components */}
      <h1 className={'text-xl'}>Home page </h1>
      <AddCompanyButton />
    </main>
  );
}
