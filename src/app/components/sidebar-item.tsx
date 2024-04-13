import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
  current: boolean;
}

export default function SidebarItem({
  pathname,
  src,
  alt,
  children,
  current,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center h-9 mx-1 gap-3.5',

          current &&
            'after:h-full after:border-2 after:rounded-sm after:ml-auto'
          // current && 'before:h-full before:border-2 before:rounded-sm'
        )}
      >
        <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </Link>
    </li>
  );
}
