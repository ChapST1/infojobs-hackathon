import { useEffect, useState } from 'react'
import { IconSave } from '../../../../icons'
import { useSaveOffersContext } from '../../../../../hook/useStorageOffersContext'
import { getFromLocalStorage, saveToLocalStorage } from '../../../../../utils'
import { useOffersContext } from '../../../../../hook/useOffersContext'

export function Save ({ offerId }) {
  const { saveOffers, setSaveOffer } = useSaveOffersContext()
  const { allOffers } = useOffersContext()

  const [isSaved, setIsSaved] = useState(false)

  const handleClick = () => {
    const searchSaveInfo = saveOffers.find((item) => item.offerId === offerId)

    if (searchSaveInfo) {
      const prevSaveOffers = getFromLocalStorage('saveOffers') ?? []
      const newAllSaves = prevSaveOffers.filter((item) => item.offerId !== offerId)
      setSaveOffer(newAllSaves)
      saveToLocalStorage('saveOffers', newAllSaves)

      return
    }

    setIsSaved(!isSaved)
    handleSaveInfo()
  }
  const handleSaveInfo = () => {
    const objInfo = {
      offerId,
      offer: allOffers.find((offer) => offer.id === offerId),
      isSaved: !isSaved
    }

    const newAllSaves = [...saveOffers, objInfo]
    setSaveOffer(newAllSaves)

    const prevSaveOffers = getFromLocalStorage('saveOffers') ?? []

    saveToLocalStorage('saveOffers', [...prevSaveOffers, objInfo])
  }

  useEffect(() => {
    const searchSaveInfo = saveOffers.find((like) => like.offerId === offerId)
    setIsSaved(searchSaveInfo?.isSaved ?? false)
  }, [offerId, saveOffers])

  return (
    <div onClick={handleClick} className='cursor-pointer  bg-[#cfd2f5] w-[45px] h-[45px] flex items-center justify-center rounded-full'>
      <IconSave styles={`duration-300 scale-125 ${isSaved ? 'fill-[#4f527c]' : 'fill-[#f0f3ff]'}`} />
    </div>
  )
}
