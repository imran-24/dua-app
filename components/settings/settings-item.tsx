import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface SettingsItemProps{
    label: string,
    icon: LucideIcon,
    href: string
}
const SettingsItem = ({label, icon: Icon, href}: SettingsItemProps) => {
  return (
    <>
      <Link href={href}
      className={
        clsx(`
        group
        flex
        gap-x-3
        text-sm
        p-3 
        leading-6
        rounded-lg
        hover:text-black
        bg-gray-100`,
        'text-gray-500')
      }>
        <Icon className='h-4 w-4 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
        <span className='text-xs hover:text-black text-neutral-500'>{label}</span>
      </Link>
   </>
  )
}

export default SettingsItem