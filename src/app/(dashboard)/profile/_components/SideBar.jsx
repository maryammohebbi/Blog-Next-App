// import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import React from 'react'
import { CiHome } from 'react-icons/ci'
import { HiArrowLeftStartOnRectangle } from 'react-icons/hi2'
import SideBarNavs from './SideBarNavs'

function SideBar() {
  //   const { logout } = useAuth()

  //   const logoutHandler = async () => {
  //     await logout
  //   }
  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      <Link
        href="/"
        className="flex items-center gap-x-4 justify-center text-secondary-700 border-b border-b-secondary-200 pb-2 mb-6"
      >
        <CiHome className="w-6 h-6" />
        <span>نکست بلاگ</span>
      </Link>
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <div
          //   onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700"
        >
          <HiArrowLeftStartOnRectangle className="ml-4 w-5 h-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  )
}

export default SideBar
