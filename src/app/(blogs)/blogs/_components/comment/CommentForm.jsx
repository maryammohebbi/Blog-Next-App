'use client'
import { createComment } from '@/lib/actions'
import SubmitButton from '@/ui/SubmitButton'
import TextArea from '@/ui/TextArea'
import React, { useActionState, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const initialState = {
  error: '',
  message: '',
}

function CommentForm({ parentId, postId, onClose }) {
  const [text, setText] = useState('')
  const [state, formAction] = useActionState(createComment, initialState)

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message)
      onClose()
    }
    if (state?.error) {
      toast.error(state.error)
    }
  }, [state])
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            action={async (formData) => {
              formAction({ formData, postId, parentId })
            }}
            // action={createComment.bind(null, postId, parentId)}
            className="space-y-7"
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton>ثبت</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CommentForm
