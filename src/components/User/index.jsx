import { Info } from './Info'
import { Actions } from './Info/actions'
import { Offer } from './Offer'

export function User ({ offer }) {
  return (
    <div className=' h-screen bg-[#f3f3ff] grid grid-cols-7' id='user-container'>
      <Offer offer={offer} />
      <Info offer={offer} />
    </div>
  )
}
