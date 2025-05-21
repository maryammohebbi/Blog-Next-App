'use client'

import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <p className="text-xl font-bold text-red-700 mb-8">
              پستی با این مشخصات یافت نشد.
            </p>
            <Link
              href="/blogs"
              className="text-secondary-700 flex gap-x-2 items-center"
            >
              <FaArrowRightLong />
              <span>بازگشت به صفحه‌ی پست‌ها</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
