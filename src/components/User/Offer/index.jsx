import { Controls } from './controls'

export function Offer ({ offer }) {
  return (
    <div className=' col-span-5 bg-[#1a1a1a] relative'>
      <h1 className='text-white'>{offer?.id}</h1>
      <Controls />
    </div>
  )
}
