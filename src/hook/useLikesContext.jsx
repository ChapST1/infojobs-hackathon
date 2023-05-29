import { useContext } from 'react'
import { LikeContext } from '../context/LIkesProvider'

export function useLikesContext () {
  const { allLikes, setAllLikes } = useContext(LikeContext)

  return { allLikes, setAllLikes }
}
