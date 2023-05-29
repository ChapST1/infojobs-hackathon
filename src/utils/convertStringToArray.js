export function convertCategoryToArray (category = '', separator = ',') {
  const categoryArray = category.split(separator)
  return categoryArray
}
