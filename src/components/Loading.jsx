import { Orbit } from '@uiball/loaders'
export function Loading () {
  return (
    <section className=' fixed top-0 left-0 w-full h-screen bg-[#f0f3ff] flex flex-col gap-4 items-center justify-center z-[200]'>
      <Orbit
        size={25}
        speed={1.5}
        color='#696da6'
      />
    </section>
  )
}
