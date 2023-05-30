import { INFOJOBS_TOKEN } from './config'

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${INFOJOBS_TOKEN}`
  }
}

export async function getAllOffer (apiUrl) {
  const response = await fetch(`${apiUrl}`, options)

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

export async function getAllCategories () {
  const response = await fetch('/api/api/1/dictionary/category', options)
  const data = await response.json()

  return data
}
