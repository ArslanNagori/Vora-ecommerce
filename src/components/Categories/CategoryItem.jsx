import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({icon:Icon,label,path}) => {
  return (
    <Link to={path} className='flex flex-col items-center gap-2 cursor-pointer'>
        <div className='w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center'>
        <Icon className='w-6 h-6 text-gray-700'/>
        </div>
        <p className='text-sm text-gray-800'>{label}</p>
    </Link>
  )
}

export default CategoryItem