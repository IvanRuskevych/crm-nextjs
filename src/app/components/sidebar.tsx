'use client';
import React from 'react';
import Image from 'next/image';
import SidebarItem from '@/app/components/sidebar-item';
import { usePathname, useRouter } from 'next/navigation';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const handleExitClick = () => {
    router.push('/'); // додає новий запис у стеку історії браузера
    // router.replace(router.pathname); // замінює поточний роут, та не додає новий запис у стек історії браузера
  };
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
            current={pathname === '/dashboard'}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
            current={pathname === '/companies'}
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          onClick={handleExitClick}
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
        >
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
