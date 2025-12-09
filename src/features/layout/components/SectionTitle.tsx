import React from 'react'

interface Props {
    tagline?: string
    title: string
    subtitle?: string
    classNames?: string
}

export const SectionTitle = ({title, subtitle, tagline, classNames}: Props) => {
  return (
    <div className={`${classNames ? classNames : 'max-w-3xl space-y-6 mx-auto px-4 text-center'}  `}>
        <p className='text-tagline font-semibold'>{tagline}</p>
        <h2 className='text-brand-primary'>{title}</h2>
        <p className='text-brand-text-secondary'>{subtitle}</p>
    </div>
  )
}
