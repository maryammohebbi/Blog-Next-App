import ButtonIcon from '@/ui/ButtonIcon'
import React from 'react'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { IoBookmarkOutline } from 'react-icons/io5'
import { toPersianDigits } from '@/utils/numberFormatter'

function PostInteractions({ post }) {
  return (
    <div className="flex items-center justify-between gap-x-4">
      <ButtonIcon variant="secondary">
        <IoChatboxEllipsesOutline />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
        <FaRegHeart />
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <IoBookmarkOutline />
      </ButtonIcon>
    </div>
  )
}

export default PostInteractions
