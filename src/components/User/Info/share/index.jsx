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
    <div className='flex gap-2 items-center justify-between h-[50px] bg-[#222] px-3 rounded'>
      <p className='w-[60%] text-ellipsis overflow-x-hidden whitespace-nowrap text-[#eeeded]'>{link}</p>
      <button className='text-white border border-white py-1 px-2 text-sm' onClick={handleClick}>
        Copiar enlace
      </button>

      {
        notification && (<Notification>Enlace copiado</Notification>)
      }
    </div>
  )
}
