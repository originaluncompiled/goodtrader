import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <main className='ml-[275px]'>{children}</main>
    </div>
  )
}

export default layout