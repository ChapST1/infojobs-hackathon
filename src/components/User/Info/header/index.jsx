import { DEFAULT_IMAGE } from '../../../../constants'

export function Header ({ offer }) {
  return (
    <header className='w-full flex items-center justify-between gap-4'>
      <div className='flex items-start gap-3'>
        <img src={offer?.profile.logoUrl || DEFAULT_IMAGE} alt='' className='w-[50px] rounded-full' />
        <div className='flex flex-col gap-1'>
          <a className='text-[#2c2a2e] text-sm hover:underline' href={offer?.profile.web} target='_blank' rel='noreferrer'>{offer?.profile.name}</a>
          <span className='text-[#82838c] text-xs'>{offer?.country.value}-{offer?.city}</span>
        </div>
      </div>

      <a href={offer?.link} target='_blank' className='bg-[#7276b2] text-[#f0f3ff] py-2 px-3 text-sm rounded duration-300 hover:bg-[#676ba7]' rel='noreferrer'>Ver en infojobs</a>
    </header>
  )
}
