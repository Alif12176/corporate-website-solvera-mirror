import React from 'react'

interface Props {
    icon: React.ReactNode
    title: string
    content: string
    classNames?:string
}

export const Stat = ({icon, title, content, classNames} : Props) => {
  return (
    <div className={`rounded-xl p-8 space-y-12 bg-brand-primary-subtle min-w-[384px] hover:shadow-lg transition-shadow duration-300 ${classNames}`}>
        {icon}
        <div className='space-y-2'>
            <h6>{title}</h6>
            <p className='text-regular'>{content}</p>
        </div>
    </div>
  )
}
