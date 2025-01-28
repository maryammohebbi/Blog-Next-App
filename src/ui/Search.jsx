'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

function Search() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const formSubmit = (e) => {
    e.preventDefault()
    const search = e.target.search
    const searchValue = search.value

    const newParams = new URLSearchParams(searchParams.toString())
    if (searchValue) {
      newParams.set('search', searchValue)
    } else {
      newParams.delete('search')
    }
    router.push(pathName + '?' + newParams.toString(), { scroll: false })
    // router.push(`${pathName}?${newParams.toString()}`, { scroll: false })
  }
  return (
    <form onSubmit={formSubmit} className="relative">
      <input
        type="text"
        name="search"
        placeholder="جستجو..."
        autoComplete="off"
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <IoIosSearch className="h-4 text-secondary-400" />
      </button>
    </form>
  )
}

export default Search
