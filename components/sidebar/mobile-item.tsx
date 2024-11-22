import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface MobileItemProps{
    label: string,
    icon: LucideIcon
}
const MobileItem: React.FC<MobileItemProps> = ({
    label,
    icon: Icon,
    
}) => {
    
  return (
    <div  className={
        clsx(`
        group
        flex
        justify-center 
        gap-x-3
        text-sm
        w-fit
        p-3 
        cursor-pointer
        rounded-full
        text-gray-500
        transition-all
      bg-gray-100/70`,
       )
      }>
        <Icon className='h-6 w-6 shrink-0 duration-300 ease-in-out transition-all' />
        <span className='sr-only'>{label}</span>
      </div>
  )
}

export default MobileItem