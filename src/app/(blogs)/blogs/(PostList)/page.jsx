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

  const { search } = searchParams

  return (
    <>
      {search ? (
        <p className="mb-2 text-secondary-700">
          {posts.length === 0
            ? 'هیچ پستی با این مشخصات پیدا نشد'
            : `نشان دادن ${posts.length}  نتیحه برای`}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostsList posts={posts} />
    </>
  )
}

export default BlogsListPage

// For English text:
// showing 3 results for "something"
// const resultText = posts.length > 1 ? "results" : "result"
// `showing ${posts.length} ${resultText} for ...`
