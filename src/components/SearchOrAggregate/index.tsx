/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
import './styles.css'

const SearchOrAggregate = ({ search, setSearch }: { search: string, setSearch: Dispatch<SetStateAction<string>> }): JSX.Element => {
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const handleClick = (): void => {
    router.push('/record')
  }

  return (
    <div className='search-aggregate'>
      <section className='section-input-search'>
        <label>
          <input
            type='text'
            name='search-bar'
            value={search}
            className='input-search-bar'
            onChange={handleChange}
            placeholder='Search ...'
          />
        </label>
      </section>
      <section>
        <button className='button-aggregate' onClick={handleClick}>Agregar</button>
      </section>
    </div>
  )
}

export default SearchOrAggregate
