import { useEffect, useState } from 'react'
import { IconHeart } from '../../../../icons'
import { useLikesContext } from '../../../../../hook/useLikesContext'

export function Heart ({ offerId, offerCategory }) {
  const { allLikes, setAllLikes } = useLikesContext()
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    const searchLikeInfo = allLikes.find((like) => like.offerId === offerId)

    if (searchLikeInfo) {
      const newAllLikes = allLikes.filter((like) => like.offerId !== offerId)
      setAllLikes(newAllLikes)
      return
    }

    setIsLiked(!isLiked)
    handleSaveInfo()
  }

  const handleSaveInfo = () => {
    const objInfo = {
      offerId,
      offerCategory,
      isLiked: !isLiked
    }

    const newAllLikes = [...allLikes, objInfo]
    setAllLikes(newAllLikes)
  }

  useEffect(() => {
    const searchLikeInfo = allLikes.find((like) => like.offerId === offerId)
    setIsLiked(searchLikeInfo?.isLiked ?? false)
  }, [offerId, allLikes])

  return (
    <div className=' cursor-pointer select-none bg-[#f6d3e6] w-[45px] h-[45px] flex items-center justify-center rounded-full' onClick={handleClick}>
      <IconHeart styles={` scale-125 ${isLiked ? 'fill-[#ef6666]' : 'fill-[#f0f3ff]'}`} />
    </div>
  )
}
