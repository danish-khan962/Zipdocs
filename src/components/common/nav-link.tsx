import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const NavLink = (
    {href, children, className}: {href:string; children:React.ReactNode; className?: string;
    }
) => {

  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
    href={href}
    className={cn(
        'text-xs md:text-sm font-normal transition-all ease-in-out duration-200 text-gray-600 dark:text-gray-300 hover:text-moonlight-300 dark:hover:text-moonlight-200',
        className,
        isActive && 'text-moonlight-200'
    )}
    >
        {children}
    </Link>
  )
}

export default NavLink