import { useEffect, useRef } from 'react'
import { useOffersContext } from '../../../../hook/useOffersContext'
import { useLocation } from 'wouter'
import { useOffers } from '../../../../hook/useOffers'

export function Controls () {
  const [location, setLocation] = useLocation()
  const index = useRef(0)
  const { allOffers } = useOffersContext()
  const { setPage, loading } = useOffers()

  const handleNext = () => {
    index.current += 1
    setLocation(`/oferta/${allOffers[index.current].id}`)
  }

  const handlePrev = () => {
    if (index.current === 0) return
    index.current -= 1
    setLocation(`/oferta/${allOffers[index.current].id}`)
  }

  useEffect(() => {
    if (index.current >= allOffers.length - 1) {
      console.log('entro al if')

      index.current = 0
      setPage((prev) => prev + 1)
    }
  }, [index.current])

  useEffect(() => {
    if (loading) return

    setLocation(`/oferta/${allOffers[index.current].id}`)
  }, [allOffers])
  return (
    <div className='absolute right-0 top-[50%] translate-x-[-50%] flex flex-col gap-3'>
      <button className='block text-white border' onClick={handlePrev}>Prev</button>
      <button className='block text-white border' onClick={handleNext}>Next</button>
    </div>
  )
}
