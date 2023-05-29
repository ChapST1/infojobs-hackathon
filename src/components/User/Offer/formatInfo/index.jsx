export function FormatInfo ({ info }) {
  const convertToArray = info?.split('\n')

  return (
    <div>
      {
        convertToArray?.map((item, index) => {
          return (
            <p key={index} className='text-[#82838c] py-[2px] text-base'>{item}</p>
          )
        })
      }
    </div>
  )
}
