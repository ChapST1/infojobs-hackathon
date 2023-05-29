import { useCallback, useEffect, useState } from 'react'
import { getAllOffer, getSingleOffers } from '../services'
import { useOffersContext } from './useOffersContext'

export function useOffers () {
  const { allOffers, setAllOffers } = useOffersContext()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    console.log(page)

    setLoading(true)

    getAllOffer('/api/api/9/offer', page)
      .then(async (res) => {
        const data = await getSingleOffers(res.allIds)

        setAllOffers(data)
      })
      .finally(() => setLoading(false))
  }, [page])

  return { allOffers, loading, setPage }
}
