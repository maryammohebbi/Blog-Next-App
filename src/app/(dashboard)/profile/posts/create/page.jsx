import Breadcrumbs from '@/ui/Breadcrumbs'
import React from 'react'

function Page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'پست ها',
            href: '/profile/posts',
          },
          {
            label: 'ایجاد پست',
            href: '/profile/posts/create',
            active: true,
          },
        ]}
      />
      create post form ...
    </div>
  )
}

export default Page
