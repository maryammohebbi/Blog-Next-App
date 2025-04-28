'use client'

import ButtonIcon from '@/ui/ButtonIcon'
import React from 'react'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'
import { toPersianDigits } from '@/utils/numberFormatter'
import toast from 'react-hot-toast'
import { bookmarkPostApi, likePostApi } from '@/services/postServices'
import { useRouter } from 'next/navigation'

function PostInteractions({ post }) {
  // console.log('post liked: ', post.isLiked)
  const router = useRouter()

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId)
      toast.success(message)
      router.refresh()
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId)
      toast.success(message)
      router.refresh()
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return (
    <div className="flex items-center justify-between gap-x-4">
      <ButtonIcon variant="secondary">
        <IoChatboxEllipsesOutline />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <FaHeart /> : <FaRegHeart />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <IoBookmark /> : <IoBookmarkOutline />}
      </ButtonIcon>
    </div>
  )
}

export default PostInteractions
