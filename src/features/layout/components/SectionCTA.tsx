import Image from 'next/image'
import React from 'react'

interface CTA {
  cta_image: string;
  cta_primary_text: string;
  cta_secondary_text: string;
  cta_button: React.ReactNode;
}

export const SectionCTA = ({ cta }: { cta: CTA }) => {
  // Tambahkan .trim() untuk membuang spasi di awal/akhir URL
  const cleanImageSrc = cta.cta_image ? cta.cta_image.trim() : '';

  return (
    <div className='md:py-28 py-12 md:px-16 px-4 md:flex gap-20 max-w-7xl mx-auto'>
      <Image
        src={cleanImageSrc}
        alt='cta'
        className='h-[400px] w-[600px] object-contain md:hidden'
        width={400}
        height={600}
      />
      <div className='space-y-8 md:w-1/2'>
        <div className='space-y-6'>
          <h2 className='text-primary'>{cta.cta_primary_text}</h2>
          <p className='text-medium'>{cta.cta_secondary_text}</p>
        </div>
        <div className='flex md:flex-row flex-col gap-4'>
          {cta.cta_button}
        </div>
      </div>
      <div className='md:w-1/2 hidden md:block'>
        <Image
          src={cleanImageSrc}
          alt='cta'
          className='h-[400px] w-[600px] object-contain'
          width={400}
          height={600}
        />
      </div>
    </div>
  )
}