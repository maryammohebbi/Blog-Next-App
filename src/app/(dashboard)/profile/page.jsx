import React, { Suspense } from 'react'
import PostsTable from './posts/_/components/PostsTable'
import CardsWrapper from './_components/CardsWrapper'
import Fallback from '@/ui/Fallback'

async function Profile() {
  return (
    <div>
      <h1>داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>

      <h2>آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <PostsTable query="sort=latest&limit=5" />
      </Suspense>
    </div>
  )
}

export default Profile
