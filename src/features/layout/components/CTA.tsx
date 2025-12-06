import React from 'react'
import { Input } from './Input'
import { Button } from './Button'

export default function CTA() {
  return (
    <div className='md:py-28 py-10 md:px-16 px-6'>
        <div className='flex md:flex-row flex-col gap-8'>
            <div className='space-y-6 w-3/4'>
                <h3 className='text-brand-primary'>Siap Optimalkan Bisnis Anda?</h3>
                <p>Dapatkan wawasan, tren, dan berita terbaru dari Solvera.</p>
            </div>
            <div className='space-y-4'>
                <div className='flex gap-4'>
                    <Input placeholder='Alamat Email Anda' type='email'/>
                    <Button>Bergabung</Button>
                </div>
                    <p className='text-tiny'>Dengan berlangganan, Anda menerima Kebijakan Privasi kami dan setuju untuk menerima pembaruan.</p>
            </div>
        </div>
    </div>
  )
}
