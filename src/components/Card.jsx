import { useEffect, useState } from 'react'
import { useOffers } from '../hook/useOffers'
import { useLocation } from 'wouter'

export function Card () {
  const [, setLocation] = useLocation()
  const [value, setValue] = useState(0)
  const { allOffers, loading, setPage } = useOffers()

  const handleClick = () => {
    setValue(value + 1)
  }

  useEffect(() => {
    if (value === 10) {
      console.log('value is 10')
      setPage(2)
      setLocation('/oferta/')
    }
  }, [value])

  return (
    <>
      {
            loading
              ? <h1>cargando...</h1>
              : (
                <div>
                  <h1>{value}</h1>
                  <button onClick={handleClick}>Increase</button>
                </div>
                )
        }
    </>
  )
}
