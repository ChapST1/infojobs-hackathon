import { useEffect, useRef } from 'react'
import { useOffers } from '../hook/useOffers'
import { useLocation } from 'wouter'
import { Loading } from '../components/Loading'

export function Offer () {
  const [, setLocation] = useLocation()
  const { allOffers, loading } = useOffers()
  const firstOffer = allOffers[0]?.id

  useEffect(() => {
    if (firstOffer) {
      setLocation(`/oferta/${firstOffer}`)
    }
  }, [allOffers, firstOffer, setLocation])

  return (
    <>
      {
        loading ? <Loading /> : <button>Ir al inicio</button>
      }
    </>
  )
}
