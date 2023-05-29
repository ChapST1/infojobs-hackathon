import { useContext } from 'react'
import { OfferStorageContext } from '../context/OfferStorageProvider'

export function useSaveOffersContext () {
  const { saveOffers, setSaveOffer } = useContext(OfferStorageContext)

  return { saveOffers, setSaveOffer }
}
