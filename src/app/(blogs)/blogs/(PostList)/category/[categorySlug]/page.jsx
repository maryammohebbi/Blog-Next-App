import PostsList from 'app/blogs/_components/PostsList'
import React from 'react'
import queryString from 'query-string'
import { cookies } from 'next/headers'
import setCookieOnReq from '@/utils/setCookieOnReq'
import { getPosts } from '@/services/postServices'

async function Category({ params, searchParams }) {
  const { categorySlug } = params

  // const queries =
  //   queryString.stringify(searchParams) + '&' + `categorySlug=${categorySlug}`

  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug=${categorySlug}`

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}&${queries}`
  // )
  // const { data } = await res.json()
  // const { posts } = data || {}

  const cookieStore = cookies()
  const options = setCookieOnReq(cookieStore)
  const posts = await getPosts(queries, options)

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد
        </p>
      ) : (
        <PostsList posts={posts} />
      )}
    </div>
  )
}

export default Category
