import { useEffect } from 'react'
import { DEFAULT_VALUE } from '../../../../constants'
import { useSaveOffersContext } from '../../../../hook/useStorageOffersContext'
import { getFromLocalStorage, saveToLocalStorage } from '../../../../utils'

export function Card ({ offer }) {
  const { setSaveOffer } = useSaveOffersContext()
  const localStorageOffers = getFromLocalStorage('saveOffers') ?? []

  const handleDelete = () => {
    const newArrToSave = localStorageOffers.filter((item) => item.offerId !== offer.id)

    setSaveOffer(newArrToSave)
    saveToLocalStorage('saveOffers', newArrToSave)
  }

  const handleDetails = () => {

  }

  return (
    <>
      {
        offer && (
          <div className='w-full bg-[#7276b2] p-3 flex flex-col gap-2 rounded'>
            <h4 className=' w-full text-base text-[#d5d7f7] text-1xl font-semibold py-[2px] whitespace-nowrap  overflow-hidden  text-ellipsis '>Puesto: <span className=' text-[#a8abd0]'>{offer?.title || DEFAULT_VALUE}</span></h4>
            <h4 className='text-base text-[#d5d7f7] text-1xl font-semibold py-[2px] whitespace-nowrap  overflow-hidden  text-ellipsis'>Salario: <span className='text-[#a8abd0]'>{offer?.salaryDescription || DEFAULT_VALUE}</span></h4>
            <h4 className='text-base text-[#d5d7f7] text-1xl font-semibold py-[2px] whitespace-nowrap  overflow-hidden  text-ellipsis'>Industria: <span className='text-[#a8abd0]'>{offer?.profile?.typeIndustry?.value || DEFAULT_VALUE}</span></h4>
            <h4 className='text-base text-[#d5d7f7] text-1xl font-semibold py-[2px] whitespace-nowrap  overflow-hidden  text-ellipsis'>Vacantes: <span className='text-[#a8abd0]'>{offer?.vacancies || DEFAULT_VALUE}</span></h4>

            <div className='flex gap-2'>
              <button className=' flex-1 text-xs bg-[#434675] text-[#f0f3ff] py-3 px-3  text-center rounded duration-300 hover:bg-[#060608]' onClick={handleDetails}>Ver mas detalles</button>
              <button className=' flex-1 text-xs bg-[#434675] text-[#f0f3ff] py-3 px-3  text-center rounded duration-300 hover:bg-[#060608]' onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        )
      }
    </>
  )
}