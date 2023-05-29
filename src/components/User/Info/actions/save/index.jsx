import { useEffect, useState } from 'react'
import { IconSave } from '../../../../icons'
import { useSaveOffersContext } from '../../../../../hook/useStorageOffersContext'
import { Notification } from '../../../../Notification'
import { Link } from 'wouter'

export function Save ({ offerId }) {
  const { saveOffers, setSaveOffer } = useSaveOffersContext()
  const [isSaved, setIsSaved] = useState(false)

  const handleClick = () => {
    const searchSaveInfo = saveOffers.find((like) => like.offerId === offerId)

    if (searchSaveInfo) {
      const newAllSaves = saveOffers.filter((like) => like.offerId !== offerId)
      setSaveOffer(newAllSaves)
      return
    }

    setIsSaved(!isSaved)
    handleSaveInfo()
  }
  const handleSaveInfo = () => {
    const objInfo = {
      offerId,
      isSaved: !isSaved
    }

    const newAllSaves = [...saveOffers, objInfo]
    setSaveOffer(newAllSaves)
  }

  useEffect(() => {
    console.log({
      saveOffers
    })

    const searchSaveInfo = saveOffers.find((like) => like.offerId === offerId)
    setIsSaved(searchSaveInfo?.isSaved ?? false)
  }, [offerId, saveOffers])

  return (
    <div onClick={handleClick} className='cursor-pointer  bg-[#cfd2f5] w-[45px] h-[45px] flex items-center justify-center rounded-full'>
      <IconSave styles={`scale-125 ${isSaved ? 'fill-[#4f527c]' : 'fill-[#f0f3ff]'}`} />
      {
        // isSaved
        //   ? (
        //     <Notification>
        //       Oferta guardada
        //       <Link to='/almacen' className='underline mx-4'>Ir al almacen</Link>
        //     </Notification>
        //     )
        //   : null
      }
    </div>
  )
}
