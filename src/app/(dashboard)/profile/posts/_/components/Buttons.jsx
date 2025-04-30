'use client'

import ButtonIcon from '@/ui/ButtonIcon'
import Link from 'next/link'
import React from 'react'
import { CiTrash } from 'react-icons/ci'
import { PiPencilLineLight } from 'react-icons/pi'
import { LuPlus } from 'react-icons/lu'

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد پست</span>
      <LuPlus className="w-5 h-5" />
    </Link>
  )
}

export function DeletePost({ id }) {
  return (
    <ButtonIcon variant="outline" onClick={() => console.log(id)}>
      <CiTrash className="text-error" />
    </ButtonIcon>
  )
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PiPencilLineLight />
      </ButtonIcon>
    </Link>
  )
}
