import { useRef } from 'react'
import { Offer } from '../User/Offer'
import { Header } from '../User/Info/header'
import { FormatInfo } from '../User/Offer/formatInfo'
import { Category } from '../User/Info/category'
import { Share } from '../User/Info/share'
import { motion } from 'framer-motion'

export function Modal ({ detailState, offer }) {
  const modalRef = useRef()

  const handleClick = (e) => {
    if (e.target === modalRef.current) {
      detailState(false)
    }
  }

  return (
    <motion.section className='w-full h-screen fixed bottom-0 left-0 bg-[#f0f3ffcd] text-white flex items-start justify-center p-3' onClick={handleClick} ref={modalRef} initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 20 }}>
      <div className=' w-[90%] h-screen grid grid-cols-7 overflow-y-scroll gap-4 bg-[#f0f3ff] p-4 rounded-lg' id='user-description'>
        <Offer offer={offer} />
        <div className='col-span-2'>
          <Header offer={offer} />
          <div className='mt-4 py-2 border-t-2 border-[#676ba7] h-[250px]  overflow-y-scroll ' id='user-description'>
            <FormatInfo info={offer?.profile.description} />
          </div>

          <Category category={offer?.category?.value} subCategory={offer?.subcategory?.value} />
          <Share link={offer?.link} />
        </div>
      </div>
    </motion.section>
  )
}
