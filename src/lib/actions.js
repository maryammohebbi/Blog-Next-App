'use server'

import { createCommentApi } from '@/services/commentService'
import setCookieOnReq from '@/utils/setCookieOnReq'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import toast from 'react-hot-toast'

// export async function createComment(postId, parentId, formData) {
export async function createComment(prevState, { formData, postId, parentId }) {
  //   console.log(formData.get('text'))
  const cookiesStore = cookies()
  const options = setCookieOnReq(cookiesStore)

  const rawFormData = {
    postId,
    parentId,
    text: formData.get('text'),
  }

  try {
    const { message } = await createCommentApi(rawFormData, options)
    revalidatePath('/blogs/[slug]')
    // toast.success(message)
    return {
      message,
    }
  } catch (err) {
    const error = err?.response?.data?.message
    return {
      error,
    }
  }
}
