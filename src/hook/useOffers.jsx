import { useEffect, useState } from 'react'
import { getAllOffer, getSingleOffers } from '../services'
import { useOffersContext } from './useOffersContext'
import { useLikesContext } from './useLikesContext'
import { useCategory } from './useCategory'

export function useOffers () {
  const { allOffers, setAllOffers } = useOffersContext()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [categoryKey, setCategoryKey] = useState(null)

  // likes
  const { allLikes } = useLikesContext()
  const { category } = useCategory()

  useEffect(() => {
    setLoading(true)
    if (allLikes?.length > 0) {
      const getLastCategory = allLikes[allLikes.length - 1].offerCategory
      const findKeyCategory = category.find((item) => item.value === getLastCategory)
      setCategoryKey(findKeyCategory?.key)
    }

    async function getOffers () {
      const apiUrl = categoryKey ? `/api/api/7/offer?category=${categoryKey}` : `/api/api/9/offer?page=${page}`

      const offers = await getAllOffer(apiUrl)
      const singleOffer = await getSingleOffers(offers.allIds)

      setAllOffers(singleOffer)
      setLoading(false)
    }

    getOffers()
  }, [page, categoryKey])

  return { allOffers, loading, setPage }
}
