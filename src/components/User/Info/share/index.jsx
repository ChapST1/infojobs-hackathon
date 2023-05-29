import { useEffect, useState } from 'react'
import { Notification } from '../../../Notification'

export function Share ({ link }) {
  const [notification, setNotification] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(link).then(() => {
      setNotification(true)
    })
  }

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification(false)
      }, [2000])
    }
  }, [notification])

  return (
    <div className='flex gap-2 items-center justify-between h-[50px] bg-[#7276b5] px-3 rounded'>
      <p className='w-[60%] text-ellipsis overflow-x-hidden whitespace-nowrap text-[#eeeded] text-sm'>{link}</p>
      <button className='text-[#f0f3ff] border rounded-md border-[#f0f3ff] py-1 px-4 text-sm duration-300 hover:bg-[#676ba7]' onClick={handleClick}>
        Copiar
      </button>

      {
        notification && (<Notification>Enlace copiado</Notification>)
      }
    </div>
  )
}
