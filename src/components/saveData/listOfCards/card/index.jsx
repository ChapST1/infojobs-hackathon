import { useState } from 'react'
import { DEFAULT_VALUE } from '../../../../constants'
import { useSaveOffersContext } from '../../../../hook/useStorageOffersContext'
import { getFromLocalStorage, saveToLocalStorage } from '../../../../utils'
import { Modal } from '../../../modal'

import { AnimatePresence, motion } from 'framer-motion'

export function Card ({ offer }) {
  const { setSaveOffer } = useSaveOffersContext()
  const localStorageOffers = getFromLocalStorage('saveOffers') ?? []

  const [openDetail, setOpenDetail] = useState(false)

  const handleDelete = () => {
    const newArrToSave = localStorageOffers.filter((item) => item.offerId !== offer.id)

    setSaveOffer(newArrToSave)
    saveToLocalStorage('saveOffers', newArrToSave)
  }

  const handleDetails = () => {
    setOpenDetail(true)
  }

  return (
    <>
      {
        offer && (
          <motion.div className='w-full bg-[transparent] border-[4px] border-[#7276b2] p-3 flex flex-col gap-2 rounded' initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 20 }}>
            <h4 className=' w-full text-base text-[#2c2a2e] text-1xl font-semibold py-[2px] whitespace-nowrap  overflow-hidden  text-ellipsis '>Puesto: <span className=' text-[#82838c]'>{offer?.title || DEFAULT_VALUE}</span></h4>
            <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px] whitespace-nowrap  overflow-hidden  text-ellipsis'>Salario: <span className='text-[#82838c]'>{offer?.salaryDescription || DEFAULT_VALUE}</span></h4>
            <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px] whitespace-nowrap  overflow-hidden  text-ellipsis'>Industria: <span className='text-[#82838c]'>{offer?.profile?.typeIndustry?.value || DEFAULT_VALUE}</span></h4>
            <h4 className='text-base text-[#2c2a2e] text-1xl font-semibold py-[2px] whitespace-nowrap  overflow-hidden  text-ellipsis'>Vacantes: <span className='text-[#82838c]'>{offer?.vacancies || DEFAULT_VALUE}</span></h4>

            <div className='flex gap-2'>
              <button className=' flex-1 text-xs bg-[#cfd2f5] text-[#565784] py-3 px-3  text-center rounded duration-300' onClick={handleDetails}>Ver mas detalles</button>
              <button className=' flex-1 text-xs bg-[#f6d3e6] text-[#895b74] py-3 px-3  text-center rounded duration-300' onClick={handleDelete}>Eliminar</button>
            </div>
          </motion.div>
        )
      }

      <AnimatePresence>
        {
        openDetail && (<Modal detailState={setOpenDetail} offer={offer} />)
        }
      </AnimatePresence>
    </>
  )
}
