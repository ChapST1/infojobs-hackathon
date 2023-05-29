import { useEffect, useRef } from 'react'
import { useOffers } from '../hook/useOffers'
import { useLocation } from 'wouter'

export function Offer () {
  const [, setLocation] = useLocation()
  const { allOffers } = useOffers()
  const firstOffer = allOffers[0]?.id

  useEffect(() => {
    if (firstOffer) {
      setLocation(`/oferta/${firstOffer}`)
    }
  }, [allOffers, firstOffer, setLocation])

  return (
    <h1>loading...</h1>
  )
}
