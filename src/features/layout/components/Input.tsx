import React from 'react'

interface Props {
    placeholder?: string
    type?:string
    value?:string
    onChange?:(e: React.ChangeEvent<HTMLInputElement>)=>void
    onKeyDown?:(e:any)=>void
}

export const Input = ({type, placeholder, value, onChange, onKeyDown}:Props) => {
  return (
        <input type={type} className='py-2 px-3 w-full bg-primary-subtle border border-primary rounded-md focus:outline-2' placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown}></input>
  )
}
