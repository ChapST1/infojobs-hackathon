import { useEffect, useState } from 'react'
import { IconHeart } from '../../../../icons'

export function Heart () {
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    console.log('render')
  }, [])

  return (
    <div className=' cursor-pointer select-none' onClick={handleClick}>
      <IconHeart styles={` scale-150 ${isLiked ? 'fill-[red]' : 'stroke-white'}`} />
    </div>
  )
}
