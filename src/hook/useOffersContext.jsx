import { useContext } from 'react'
import { OfferContext } from '../context/OfferProvider'

export function useOffersContext () {
  const { allOffers, setAllOffers } = useContext(OfferContext)

  return {
    allOffers,
    setAllOffers
  }
}
