import { convertCategoryToArray } from '../../../../utils/convertStringToArray'

export function Category ({ category, subCategory }) {
  const listOfCategory = convertCategoryToArray(category, ',')
  const listOfSubCategory = convertCategoryToArray(subCategory, ',')

  return (
    <div className='mt-4 py-2 border-t-2 border-[#828282]'>
      <h4 className='text-white'>Categorias:</h4>
      <div className='flex gap-2 '>
        {
        listOfCategory.map((category, index) => {
          return (
            <a href='#' key={index} className='text-[#d6d7f7] text-xs hover:underline' rel='noreferrer'>#{category}</a>
          )
        })
        }
        {
        listOfSubCategory.map((category, index) => {
          return (
            <a href='#' key={index} className='text-[#d6d7f7] text-xs hover:underline' rel='noreferrer'>#{category}</a>
          )
        })
      }
      </div>

    </div>
  )
}
