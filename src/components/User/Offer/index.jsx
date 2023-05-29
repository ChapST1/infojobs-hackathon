import { FormatInfo } from './formatInfo'
import { InitialInfo } from './initialInfo'
import { Skills } from './skills'

export function Offer ({ offer }) {
  return (
    <div className=' col-span-5 overflow-y-scroll' id='user-offer'>
      <div className=' p-4 w-[90%]'>
        <InitialInfo offer={offer} />

        <h2 className='text-[#2c2a2e] font-bold text-2xl pt-3'>Requerimientos minimos</h2>
        <FormatInfo info={offer?.minRequirements} />

        <Skills skillsList={offer?.skillsList} />

        <h2 className='text-[#2c2a2e] font-bold text-2xl pt-3'>Descripcion</h2>
        <FormatInfo info={offer?.description} />
      </div>
    </div>
  )
}
