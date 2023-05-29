import { useState } from 'react'
import { IconSave } from '../../../../icons'

export function Save () {
  const [isSaved, setIsSaved] = useState(false)

  const handleClick = () => {
    setIsSaved(!isSaved)
  }

  return (
    <div onClick={handleClick} className='cursor-pointer  bg-[#cfd2f5] w-[45px] h-[45px] flex items-center justify-center rounded-full'>
      <IconSave styles={`scale-125 ${isSaved ? 'fill-[#4f527c]' : 'fill-[#f0f3ff]'}`} />
    </div>
  )
}
