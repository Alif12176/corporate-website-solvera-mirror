"use client";
import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface Props {
    title: string
    content: string
}

export const Disclosure = ({title, content}: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='bg-brand-primary-subtle rounded-2xl border border-[#00080426]'>
        <div className='flex justify-between items-center gap-6 px-6 py-5 cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
            <p className='text-medium font-bold text-[#0A1D63]'>{title}</p>
            <div>
            {isOpen?<BiChevronUp className='h-8 w-8' />:<BiChevronDown className='h-8 w-8' />}
            </div>
        </div>
        {isOpen &&
        <div className='px-6 pb-6'>
            <p className='text-regular'>{content}</p>
        </div>
        }
    </div>
  )
}
