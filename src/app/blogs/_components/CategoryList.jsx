import Link from 'next/link'
import React from 'react'

async function CategoryList() {
  const res = await fetch('http://localhost:5000/api/category/list')
  const {
    data: { categories },
  } = await res.json()

  //   console.log(categories)

  return (
    <ul className="space-y-4">
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CategoryList
