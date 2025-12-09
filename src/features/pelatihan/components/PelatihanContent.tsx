import Image from 'next/image'
import React from 'react'

export const Content = () => {
    const contentData = [
        {label: 'Strategy & Planning', value: '80%'},
        {label: 'System Customization & Development', value: '60%'},
        {label: 'Testing & User Guideline', value: '60%'},
        {label: 'Live Chat & Support Maintenance', value: '60%'},
        {label: 'Training & Certification', value: '60%'},
    ]

  return (
    <div className='py-12 md:px-16 px-4 flex md:flex-row flex-col md:gap-20 gap-10'>
        <div className='md:w-1/2'>
        <Image src='/images/placeholder.png' alt='image' width={600} height={684}/>
        </div>
        <div className='space-y-6 md:w-1/2'>
            <div className='space-y-4'>
                <p className='text-tagline font-semibold'>Kompetensi Inti SOLVERA</p>
                <div className='space-y-6'>
                <h2 className='text-brand-primary'>Keahlian Terukur di Setiap Fase Proyek</h2>
                <p className='text-medium'>
                    Kami memiliki keahlian mendalam di setiap tahap proyek, mulai dari perencanaan strategis hingga dukungan pasca implementasi, untuk memastikan keberhasilan transformasi digital perusahaan Anda.
                </p>
                </div>
            </div>
            <div className='py-2 space-y-8'>
                { contentData.map((c, index)=>(
                <div key={index}>
                <p className='text-regular font-medium'>{c.label}</p>
                <div className='flex items-center gap-4 w-full'>
                    <div className='w-full'>
                <div className='h-2 bg-brand-primary-subtle rounded-full w-full'></div>
                <div className='h-2 bg-brand-primary rounded-l-full -mt-2' style={{width: c.value}}></div>
                    </div>
                <p className='w-[10%]'>{c.value}</p>
                </div>
                </div>
                ))
                }
            </div>
        </div>
    </div>
  )
}
