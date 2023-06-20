import React from 'react'

const ContentWrapper = ({ children }) => {
  return (
    <div className='contentWrapper w-100 max-w-[1200px] my-0 py-0 px-[20px] mx-auto' >{children}</div>
  )
}

export default ContentWrapper