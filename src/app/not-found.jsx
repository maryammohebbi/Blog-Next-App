'use client'

import useMoveBack from '@/hooks/useMoveBack'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function NotFound() {
  const moveBack = useMoveBack()
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>
            <button
              onClick={moveBack}
              className="flex items-center gap-x-2 text-secondary-500"
            >
              <FaArrowRightLong className="w-6 h-6 text-primary-900" />
              <span> برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
