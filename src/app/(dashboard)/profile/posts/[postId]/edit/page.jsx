import { getPostById } from '@/services/postServices'
import Breadcrumbs from '@/ui/Breadcrumbs'
import { notFound } from 'next/navigation'
import React from 'react'
import CreatePostForm from '../../create/_/CreatePostForm'

async function EditPage({ params: { postId } }) {
  const { post } = await getPostById(postId)

  //   console.log(post)

  if (!post) {
    notFound()
  }
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'پست ها',
            href: '/profile/posts',
          },
          {
            label: 'ویرایش پست',
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  )
}

export default EditPage
