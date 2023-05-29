export function convertCategoryToArray (category = '', separator = ',') {
  const categoryArray = category.split(separator)
  return categoryArray
}

export function saveToLocalStorage (name, value) {
  localStorage.setItem(name, JSON.stringify(value))
}

export function getFromLocalStorage (name) {
  return JSON.parse(localStorage.getItem(name))
}
