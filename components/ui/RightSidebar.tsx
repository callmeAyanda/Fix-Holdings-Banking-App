
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import BankCard from './BankCard';


const RightSidebar = ({ user, transactions, banks }:RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>

      <section className='flex flex-col pb-8'>
        <div className='profile-banner' >
          <div className='profile flex items-center gap-4'>

            <div className='profile-img bg-blue-500 flex items-center justify-center text-white rounded-full'>
              <span className='text-5xl font-bold text-blue-500'>
                {user.firstName[0]}
              </span>
            </div>

            <div className='profile-details flex flex-col'>
              <h1 className='profile-name text-lg font-semibold'>
                {user.firstName} {user.lastName}
              </h1>

              <p className='profile-email'>
                {user.email}
              </p>

            </div>

          </div>
        </div>
      </section>

      <section className='banks'>
        <div className='flex w-full justify-between items-center'>

          <h2 className='header-2 text-lg font-semibold'>
            My Banks
          </h2>

            <Link href="/" className='flex items-center gap-2'>
              <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt='plus'
            />

              <span className='text-sm font-semibold text-gray-600'>
                Add Bank
              </span>
            </Link>
          
        </div>

        {banks?.length > 0 && (

          <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
            
            <div className='relative z-10'>
              <BankCard
                key={banks[0].id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>

            {banks[1] && (

              <div className='absolute right-0 top-8 z-0 w-[90%]'>
                <BankCard
                key={banks[1].id}
                account={banks[1]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
              </div>

            )}
            

          </div>

        )}


      </section>

    </aside>
  )
}

export default RightSidebar

