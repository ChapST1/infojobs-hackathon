import { useEffect, useRef } from 'react'
import { useOffersContext } from '../../../../hook/useOffersContext'
import { useLocation } from 'wouter'
import { useOffers } from '../../../../hook/useOffers'
import { Loading } from '../../../Loading'
import { IconArrow } from '../../../icons'

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
    <>
      <div className='absolute left-[-80px] top-[50%] translate-y-[-50%] flex flex-col gap-3'>
        <aside className=' w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#7276b5] cursor-pointer ' onClick={handlePrev}><IconArrow styles='fill-[#f0f3ff] scale-100 rotate-[90deg]' /></aside>
        <aside className=' w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#7276b5] cursor-pointer ' onClick={handleNext}><IconArrow styles='fill-[#f0f3ff] scale-100 rotate-[-90deg] ' /></aside>
      </div>

      {
        loading ? <Loading /> : null
      }
    </>
  )
}
