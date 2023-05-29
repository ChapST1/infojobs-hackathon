import { IconLogo } from '../icons'
import { Links } from './links'

export function Navigation () {
  return (
    <header className='h-[70px] flex items-center justify-between px-4 bg-[#676ba7]'>
      <IconLogo className='w-40 py-2 fill-[#f0f3ff]' />
      <Links />
    </header>
  )
}
