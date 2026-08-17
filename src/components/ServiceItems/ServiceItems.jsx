import React from 'react'

const ServiceItems = ({icon:Icon,title,description}) => {
  return (
    <div className='flex items-center gap-3'>
        <Icon className='w-6 h-6 text-gray-700'/>
        <div>
            <h3 className='text-sm font-medium text-gray-900'>{title}</h3>
            <p className='text-xs text-gray-500'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceItems