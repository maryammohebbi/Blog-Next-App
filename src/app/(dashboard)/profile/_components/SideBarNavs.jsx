'use client'

import React from 'react'
import { HiOutlineRectangleGroup } from 'react-icons/hi2'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { LuUsers } from 'react-icons/lu'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

const sidebarNavs = [
  {
    id: 1,
    title: 'داشبورد',
    icon: <HiOutlineRectangleGroup className="w-5 h-5" />,
    href: '/profile',
  },
  {
    id: 2,
    title: 'پست ها',
    icon: <IoDocumentTextOutline className="w-5 h-5" />,
    href: '/profile/posts',
  },
  {
    id: 3,
    title: 'نظرات',
    icon: <IoChatbubbleEllipsesOutline className="w-5 h-5" />,
    href: '/profile/comments',
  },
  {
    id: 4,
    title: 'دسته بندی ها',
    icon: <HiOutlineSquares2X2 className="w-5 h-5" />,
    href: '/profile/categories',
  },
  {
    id: 5,
    title: 'کاربران',
    icon: <LuUsers className="w-5 h-5" />,
    href: '/profile/users',
  },
]

function SideBarNavs() {
  const router = useRouter()
  return (
    <ul className="space-y-5 mb-5">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                'flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-300',
                {
                  'bg-primary-100/40 !font-bold text-primary-900':
                    router.pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SideBarNavs
