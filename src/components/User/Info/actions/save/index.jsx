import { useState } from 'react'
import { IconSave } from '../../../../icons'

export function Save () {
  const [isSaved, setIsSaved] = useState(false)

  const handleClick = () => {
    setIsSaved(!isSaved)
  }

  return (
    <div onClick={handleClick} className='cursor-pointer'>
      <IconSave styles={` scale-125 ${isSaved ? 'fill-white' : 'stroke-white'}`} />
    </div>
  )
}
