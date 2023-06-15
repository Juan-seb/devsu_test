'use client'

import { propsCountPagination } from '@/types'
import './styles.css'

const CountPagination = ({ results, pages, setPageSelected }: propsCountPagination): JSX.Element => {
  return (
    <div className='count-container'>
      <p className='count-results'>
        {results} {`${results === 1 ? 'Resultado' : 'Resultados'}`}
      </p>
      <div className='count-select-page'>
        <select name='' id='' className='select-page' onChange={(e) => setPageSelected(parseInt(e.target.value))}>
          {
            pages.map((page) => (
              <option key={page} value={page}>{page}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default CountPagination
