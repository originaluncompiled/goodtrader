'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { sidebarButtons } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const layout = () => {
  const pathname = usePathname();

  return (
    <nav className='flex flex-col items-center fixed p-4 w-[275px] h-screen bg-[--secondary-color] border-r border-gray-200 border-solid'>
      {/* Desktop Navigation */}
      {/* Logo */}
      <div className='select-none'>
        <Image src='/images/logo.png' className='inline' width={35} height={35} alt='Logo'/>
        <p className='inline align-middle font-bold bg-gradient-to-tr from-[--secondary-green] to-[--main-green] bg-clip-text text-transparent pl-3 text-3xl'>GoodTrader&#8482;</p>
      </div>

      {/* Nav Buttons */}
      <section className='w-full py-6 flex flex-col items-center gap-y-3'>
        <Link href='/trade' className='flex w-full justify-center'>
          <Button className='w-full bg-[--main-green] hover:bg-green-700 h-12 rounded-2xl'>
            <span className='text-center text-base font-semibold'>Take a Trade</span>
          </Button>
        </Link>

        <Separator className='w-3/5 h-0.5'/>

        {sidebarButtons.map(button => {
          const isActive = pathname === button.route || pathname.startsWith(`${button.route}/`)
          return (
            <Link key={button.label} href={button.route} className='flex w-full justify-center'>
              <Button className={cn('navButton', {'navButtonActive' : isActive})}>
                <Image src={button.icon} className='mr-3' alt={button.label} width={22} height={22}/>
                <span className='text-base text-[--text-color] font-medium'>{button.label}</span>
              </Button>
            </Link>
          )
        })}
      </section>

      {/* Account Button */}
      <DropdownMenu>
        <DropdownMenuTrigger className='mt-auto w-11/12 h-11 rounded-2xl justify-start border-gray-200 border bg-[#e4e4e480] shadow hover:bg-[#c9c9c980] hover:border-gray-300'>
          <div className='flex flex-row items-center pl-2'>
            <Image src='/icons/profileIcon.png' className='mr-3 text-[--text-color]' alt='Game Plan Icon' width={26} height={26}/>
            <Link href='/dashboard' className='text-base text-[--text-color] font-medium'>FIRSTNAME</Link>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 rounded-2xl mb-1 border-gray-200 border bg-[#f0f0f080]'>
          <DropdownMenuItem className='cursor-pointer rounded-2xl hover:bg-[#c9c9c980]'>
            <Link href='/settings' className='text-base text-[--text-color] font-medium'>Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className='bg-gray-200'/>
          <DropdownMenuItem className='cursor-pointer rounded-2xl hover:bg-[#c9c9c980]'>
            <Link href='' className='text-base text-[--text-color] font-medium'>Sign Out</Link> {/* auth & sign out */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

export default layout