import Image from 'next/image'
import React from 'react'
import { Button } from '@/features/layout/components/Button'
import { Product } from '../data/product'

export const ProductCTA = ({ product }: { product: Product }) => {
  return (
    <div className='md:py-28 py-12 md:px-16 px-4 md:flex gap-20 max-w-7xl mx-auto'>
      <Image src={product.cta_image} alt='cta' className='h-[400px] w-[600px] object-contain md:hidden' width={400} height={600} />
      <div className='space-y-8 md:w-1/2'>
        <div className='space-y-6'>
          <h2 className='text-primary'>{product.cta_primary_text}</h2>
          <p className='text-medium'>{product.cta_secondary_text}</p>
        </div>
        <div className='flex md:flex-row flex-col gap-4'>
          <Button color='primary' radius='normal' classNames='w-full md:w-auto'>Mulai Transfer</Button>
          <Button variant='outline' radius='normal' classNames='w-full md:w-auto'>Konsultasi Gratis dengan Tim Ahli</Button>
        </div>
      </div>
      <div className='md:w-1/2 hidden md:block'>
        <Image src={product.cta_image} alt='cta' className='h-[400px] w-[600px] object-contain' width={400} height={600} />
      </div>
    </div>
  )
}
