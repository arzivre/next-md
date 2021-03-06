//@ts-check
import React from 'react'
import Link from 'next/link'

export default function CategoryList({ categories }) {
  return (
    <div>
      <h3 className='text-2xl bg-gray-800 text-white p-3 rounded'>
        Blog Categories
      </h3>
      <ul className='divide-y divide-gray-300'>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/blog/category/${category.toLowerCase()}`}
            passHref
          >
            <li className='p-4 cursor-pointer hover:bg-gray-50'>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
