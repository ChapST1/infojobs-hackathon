import { useEffect } from 'react'
import { useSaveOffersContext } from '../../../hook/useStorageOffersContext'
import { getFromLocalStorage } from '../../../utils'
import { Card } from './card'

export function ListOfCards () {
  const { saveOffers } = useSaveOffersContext()
  const savedOffers = getFromLocalStorage('saveOffers') ?? []

  useEffect(() => {
  }, [saveOffers])

  return (
    <>
      <h2 className='text-[#2c2a2e] text-2xl text-center py-2'>Tus ofertas guardadas</h2>
      <section className='grid grid-cols-5 gap-4 p-3'>
        {
          savedOffers.map((item) => {
            return (
              <Card key={item?.offerId} offer={item.offer} />
            )
          })
        }
      </section>
    </>
  )
}
