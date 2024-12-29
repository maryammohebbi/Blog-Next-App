import Image from 'next/image'
import React from 'react'
import CoverImage from '../CoverImage'
import Link from 'next/link'
import { BsClock } from 'react-icons/bs'
import Avatar from '@/ui/Avatar'
import Author from './Author'

async function PostsList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`)
  const {
    data: { posts },
  } = await res.json()

  // console.log(posts)

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg"
        >
          <CoverImage {...post} />

          {/* post content */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post.title}
              </h2>
            </Link>

            {/* post author - readingTime */}
            <div className="flex flex-center justify-between">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <BsClock className="w-4 h-4 text-secondary-500 ml-1" />
                <span className="ml-1">خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null
}

export default PostsList
