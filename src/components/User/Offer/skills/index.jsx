export function Skills ({ skillsList = [] }) {
  return (
    <div className=''>
      <h2 className='text-[#2c2a2e] font-bold text-2xl pt-3'>Habilidades</h2>
      <div className='flex flex-wrap gap-2 pt-2'>
        {
          skillsList?.length > 0
            ? (
                skillsList?.map((item, index) => {
                  return (
                    <div key={index} className='text-[#d6d7f7] text-md flex items-center justify-center bg-[#7276b5] px-3 py-1 rounded'>{item.skill || 'none'}</div>
                  )
                })
              )
            : (
              <span className='text-[#82838c]'>No especificado</span>
              )
        }
      </div>
    </div>
  )
}
