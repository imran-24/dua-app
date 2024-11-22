'use client'
import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface DesktopItemProps{
  label: string,
  icon: LucideIcon,
  onClick?: ()=> void,
  active?: boolean,
}
const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
}) => {
  return (
   <li >
      <div 
      className={
        clsx(`
        group
        flex
        gap-x-3
        text-sm
        p-3 
        cursor-pointer
        leading-6
        rounded-full
        hover:text-black
        hover:scale-110
        duration-300 ease-in-out transition-all
        bg-gray-100`,
        'text-neutral-500')
      }>
        <Icon className='h-5 w-5 shrink-0' />
        <span className='sr-only'>{label}</span>
      </div>
   </li>
  )
}

export default DesktopItem