'use client'

import ButtonIcon from '@/ui/ButtonIcon'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiTrash } from 'react-icons/ci'
import { PiPencilLineLight } from 'react-icons/pi'
import { LuPlus } from 'react-icons/lu'
import Modal from '@/ui/Modal'
import ConfirmDelete from '@/ui/ConfirmDelete'

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

export function DeletePost({ post: { title, _id } }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <CiTrash className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف "${title}"`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ConfirmDelete
          resourceName={title}
          onClose={() => setOpen(false)}
          onConfirm={() => console.log('delete')}
        />
      </Modal>
    </>
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
