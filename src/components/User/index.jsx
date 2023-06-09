import { Info } from './Info'
import { Offer } from './Offer'

export function User ({ offer }) {
  return (
    <div className=' h-screen bg-[#f0f3ff] grid grid-cols-1 md:grid-cols-7' id='user-container'>
      <Offer offer={offer} />
      <Info offer={offer} />
    </div>
  )
}
