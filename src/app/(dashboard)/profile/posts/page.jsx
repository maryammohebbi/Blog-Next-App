import React, { Suspense } from 'react'
import PostsTable from './_/components/PostsTable'
import Fallback from '@/ui/Fallback'
import Search from '@/ui/Search'
import { CreatePost } from './_/components/Buttons'
import queryString from 'query-string'
import { getPosts } from '@/services/postServices'
import Pagination from '@/ui/Pagination'

async function Page({ searchParams }) {
  const query = queryString.stringify(searchParams)
  const { totalPages } = await getPosts()

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Fallback />} key={query}>
        <PostsTable query={query} />
      </Suspense>

      <div className="flex mt-5 w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}

export default Page
