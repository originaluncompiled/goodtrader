import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const layout = () => {
  return (
    <section className='flex flex-col items-center p-4 w-[300px] h-screen bg-[--secondary-color] border-r border-gray-200 border-solid'>
      {/* Desktop Navigation (Sidebar) */}
      {/* Logo */}
      <div className='select-none'>
        <Image src='/images/logo.png' className='inline' width={35} height={35} alt='Logo'/>
        <p className='inline align-middle font-bold bg-gradient-to-tr from-[--secondary-green] to-[--main-green] bg-clip-text text-transparent pl-3 text-3xl'>GoodTrader&#8482;</p>
      </div>
      {/* Buttons */}
      <section className='w-full py-6 flex flex-col items-center gap-y-3'>
        <Button className='w-11/12 bg-[--main-green] hover:bg-green-700 h-12 rounded-2xl'>
          <Link href='/dashboard' className='text-center text-base font-semibold'>Take a Trade</Link>
        </Button>

        <Separator className='w-3/5 h-0.5'/>

        {/* Use some form of state for making correct button active*/}
        <Button className='navButton'>
          <Image src='/icons/dashboardIcon.png' className='mr-3 text-[--text-color]' alt='Dashboard Icon' width={22} height={22}/>
          <Link href='/dashboard' className='text-base text-[--text-color] font-medium'>Dashboard</Link>
        </Button>
        <Button className='navButton'>
          <Image src='/icons/journalIcon.png' className='mr-3 text-[--text-color]' alt='Journal Icon' width={22} height={22}/>
          <Link href='/journal' className='text-base text-[--text-color] font-medium'>Journal</Link>
        </Button>
        <Button className='navButton'>
          <Image src='/icons/notebookIcon.png' className='mr-3 text-[--text-color]' alt='Notebook Icon' width={22} height={22}/>
          <Link href='/notebook' className='text-base text-[--text-color] font-medium'>Notebook</Link>
        </Button>
        <Button className='navButton'>
          <Image src='/icons/tradeHistoryIcon.png' className='mr-3 text-[--text-color]' alt='Trade History Icon' width={22} height={22}/>
          <Link href='/trade-history' className='text-base text-[--text-color] font-medium'>Trade History</Link>
        </Button>
        <Button className='navButton'>
          <Image src='/icons/analyticsIcon.png' className='mr-3 text-[--text-color]' alt='Analytics Icon' width={22} height={22}/>
          <Link href='/analytics' className='text-base text-[--text-color] font-medium'>Analytics</Link>
        </Button>
        <Button className='navButton'>
          <Image src='/icons/gamePlanIcon.png' className='mr-3 text-[--text-color]' alt='Game Plan Icon' width={22} height={22}/>
          <Link href='/game-plan' className='text-base text-[--text-color] font-medium'>Game Plan</Link>
        </Button>
      </section>

      {/* Account Button */}
      <Button className='mt-auto w-11/12 h-11 rounded-2xl justify-start border-gray-200 border bg-[#e4e4e480] shadow hover:bg-[#c9c9c980]
      hover:border-gray-300'>
        <Image src='/icons/profileIcon.png' className='mr-3 text-[--text-color]' alt='Game Plan Icon' width={22} height={22}/>
        <Link id='dashboardBtn' href='/dashboard' className='text-base text-[--text-color] font-medium'>FIRSTNAME</Link>
      </Button>
    </section>
  )
}

export default layout