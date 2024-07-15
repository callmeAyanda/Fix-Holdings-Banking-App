'use client';

import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

import { sidebarLinks } from '@/constants/index';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';



const Sidebar = ({ user }: SidebarProps) => {
    const pathname = usePathname();
  return (
      <section className='sidebar'>
          <nav className='flex flex-col gap-4'>
              <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                  
                  <Image
                      src="/icons/logo.svg"
                      width={34}
                      height={34}
                      alt="Fix Holdings logo"
                      className="size-[24] max-xl:size-14"
                  />

                  <h1 className="sidebar-logo">Fix Holdings</h1>
              
              </Link>
              {sidebarLinks.map((item) => {
                  const isActive =
                      pathname === item.route || pathname.startsWith(`${item.route}/`);
                return (
                    <Link href={item.route} key={item.label}
                    className={cn ('sidebar-link flex items-center gap-2 p-2', {'bg-bank-gradient': isActive})}>
                        
                        <div className='relative size-6'>
                            <Image src={item.imgURL} alt={item.label} fill
                                className={cn({ 'brightness-[3] invert-0': isActive })} />
                        </div>

                        <p className={cn('sidebar-label',{'!text-white': isActive} )}>
                            {item.label}
                        </p>
                        
                      </Link>
                )
              })}

              USER
          </nav>

          FOOTER
    </section>
  )
}

export default Sidebar
