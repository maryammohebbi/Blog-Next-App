import React from 'react'
import SvgLoaderComponent from './SVGLoaderComponent'

function Fallback() {
  return (
    <div className="flex items-center gap-x-4 justify-center my-12 mx-auto">
      <span className="text-secondary-500">در حا بارگذاری اطلاعات</span>
      <SvgLoaderComponent />
    </div>
  )
}

export default Fallback
