import React, { Suspense } from 'react'
import PostsTable from './posts/_/components/PostsTable'
import CardsWrapper from './_components/CardsWrapper'
import Fallback from '@/ui/Fallback'
import LatestPosts from './_components/LatestPosts'

async function Profile() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>

      <h2 className="text-xl mb-8 text-secondary-700">آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  )
}

export default Profile
