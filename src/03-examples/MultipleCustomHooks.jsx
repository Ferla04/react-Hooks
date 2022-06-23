import React from 'react'
import { useCounter, useFetch } from '../hooks'


export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)
  const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { quote, author } = !!data && data[0]

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        (loading) 
        ? (
            <div className="alert alert-info text-center"> Loading... </div>
          )
        : (
            <blockquote className='blockquote text-end'>
              <p className='my-3'>{ quote }</p>
              <footer className='blockquote-footer'>{ author }</footer>
            </blockquote>
          )
      }

      <button 
        className='btn btn-primary'
        disabled={ loading }
        onClick={ increment } 
      >
        next quote
      </button>

    </>
  )
}
