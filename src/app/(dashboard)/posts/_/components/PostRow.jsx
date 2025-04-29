import Table from '@/ui/Table'
import React from 'react'

function PostRow({ post, index }) {
  const { title, category, createdAt, author, type } = post
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{category.title}</td>
      <td>{author}</td>
      <td>{createdAt}</td>
      <td>{type}</td>
    </Table.Row>
  )
}

export default PostRow
