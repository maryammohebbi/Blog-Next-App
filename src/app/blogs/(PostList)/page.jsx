import React, { Suspense } from 'react'
import PostsList from '../_components/PostsList'
import Spinner from '@/ui/Spinner'

export const experimental_ppr = true 

function BlogsListPage() {

  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic animi
        vitae beatae, ratione corporis cum voluptate fugit quas possimus porro
        similique et facere labore soluta cumque libero quo aperiam obcaecati!
      </p>
      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
    </div>
  )
}

export default BlogsListPage
