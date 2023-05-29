import { convertCategoryToArray } from '../../../../utils'

export function Category ({ category, subCategory }) {
  const listOfCategory = convertCategoryToArray(category, ',')
  const listOfSubCategory = convertCategoryToArray(subCategory, ',')

  return (
    <div className='mt-4 py-2 '>
      <h4 className='text-[#2c2a2e] text-sm'>Categorias:</h4>
      <div className='flex gap-2 '>
        {
        listOfCategory.map((category, index) => {
          return (
            <a href='#' key={index} className='text-[#82838c] text-xs hover:underline' rel='noreferrer'>#{category}</a>
          )
        })
        }
        {
        listOfSubCategory.map((category, index) => {
          return (
            <a href='#' key={index} className='text-[#82838c] text-xs hover:underline' rel='noreferrer'>#{category}</a>
          )
        })
      }
      </div>

    </div>
  )
}
