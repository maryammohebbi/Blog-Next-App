import React from 'react'
import CoverImage from '../CoverImage'
import Author from './Author'

function RelatedPost({ posts }) {
  return (
    <div>
      <div className="mb-10">
        <p className="text-xl mb-4">پست های مرتبط</p>
        <div className="grid gap-4 grid-cols-6">
          {posts.map((item) => {
            return (
              <div
                key={item._id}
                className="col-span-6 md:col-span-3 lg:col-span-2"
              >
                <CoverImage {...item} />
                <div className="flex items-center justify-between">
                  <Author {...item.author} />
                  <p>{item.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedPost
