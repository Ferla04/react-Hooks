import { useCounter, useFetch } from '../hooks'
import { LoadingQuote } from './LoadingQuote'
import { Quote } from './Quote'


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
          ? <LoadingQuote />
          : <Quote quote={ quote } author={ author }/>
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
