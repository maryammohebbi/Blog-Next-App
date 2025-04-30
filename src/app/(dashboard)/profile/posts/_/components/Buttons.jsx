'use client'

import ButtonIcon from '@/ui/ButtonIcon'
import Link from 'next/link'
import React from 'react'
import { CiTrash } from 'react-icons/ci'
import { PiPencilLineLight } from 'react-icons/pi'

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
