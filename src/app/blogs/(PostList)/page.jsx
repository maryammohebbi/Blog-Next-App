// 'use client'

import React from 'react'
import PostsList from '../_components/PostsList'
import { cookies } from 'next/headers'
import { getPosts } from '@/services/postServices'
import setCookieOnReq from '@/utils/setCookieOnReq'
import queryString from 'query-string'

// export const experimental_ppr = true

async function BlogsListPage({ searchParams }) {
  // console.log(searchParams)

  const queries = queryString.stringify(searchParams)

  const cookieStore = cookies()
  const options = setCookieOnReq(cookieStore)
  const posts = await getPosts(queries, options)

  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic animi
        vitae beatae, ratione corporis cum voluptate fugit quas possimus porro
        similique et facere labore soluta cumque libero quo aperiam obcaecati!
      </p>
      {/* <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense> */}
      <PostsList posts={posts} />
    </div>
  )
}

export default BlogsListPage
