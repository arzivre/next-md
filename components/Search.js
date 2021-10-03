//@ts-check
import React, { useState, useEffect } from 'react'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const { results } = await res.json()
        setSearchResults(results)
      }
    }

    getResults()
  }, [searchTerm])

  return (
    <div className='relative mt-4 lg:mt-0 lg:mx-4'>
      <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
        <svg
          className='w-4 h-4 text-gray-600 dark:text-gray-300'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </span>
      <form>
        <input
          type='search'
          name='search'
          id='search'
          className='w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='search'
        />
      </form>
    </div>
  )
}
