import { useCounter, useFetch } from '../hooks'
import { LoadingQuote } from '../03-examplesFetch/LoadingQuote'
import { Quote } from '../03-examplesFetch/Quote'


export const Layout = () => {

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
