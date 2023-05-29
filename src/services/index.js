import { useCallback } from 'react'

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Basic NGY0ZmQwMzAzODcyNDBiOWFiYzg1MzVlNGZmYzk1MTI6REV3ZkV5UVF1dUhsalE0d2R4OEVOZ01CekRWOXIrQUw2Qkdpc0RaVWVEamJjeE1OWUE='
  }
}

export async function getAllOffer (apiUrl, page = 0) {
  const response = await fetch(`${apiUrl}?page=${page}`, options)

  const data = await response.json()
  const { items } = data

  const allIds = items?.map(item => item.id)
  return {
    allIds
  }
}

export async function getSingleOffers (arr) {
  const allPromises = arr.map(async (id) => {
    const response = await fetch(`/api/api/7/offer/${id}`, options)
    const data = await response.json()

    return data
  })

  return Promise.all(allPromises).then((values) => values)
}
