'use client'

import { useAuth } from '@/context/AuthContext'
import Avatar from '@/ui/Avatar'
import ButtonIcon from '@/ui/ButtonIcon'
import Drawer from '@/ui/Drawer'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import SideBar from './SideBar'

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const { user, isLoading } = useAuth()
  return (
    <header
      className={` bg-secondary-0 ${isLoading ? 'bg-opacity-30 blur-md' : ''}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <ButtonIcon
          className="block lg:hidden border-none"
          variant="outline"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </ButtonIcon>
        <span className="text-sm lg:text-lg font-bold text-secondary-700">
          سلام {user?.name}
        </span>
        <Link href="/profile">
          <Avatar src={user?.avatarUrl} />
        </Link>

        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <SideBar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>
      </div>
    </header>
  )
}

export default Header
