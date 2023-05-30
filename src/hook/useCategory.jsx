import { useEffect, useState } from 'react'
import { getAllCategories } from '../services'
export function useCategory () {
  const [category, setCategory] = useState([])

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategory(categories))
  }, [])

  return {
    category
  }
}
