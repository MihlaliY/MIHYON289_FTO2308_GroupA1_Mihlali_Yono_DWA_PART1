import {html} from './htmlReferences.js'
import {books, authors} from './data.js'

/**
 * This function is responsible for the previewing of the books in the app
 * When a book is clicked a modal is displayed with an image of the book, a short description
 * and the date published.
 * @param {Event} event
 */
export const previewBook = (event) => {
  const pathArray = Array.from(event.path || event.composedPath())
  let active = null

  for (const node of pathArray) {
    if (active) break

    if (node?.dataset?.preview) {
      let result = null

      for (const singleBook of books) {
        if (result) break
        if (singleBook.id === node?.dataset?.preview) result = singleBook
      }

      active = result
    }
  }

  if (active) {
    html.preview.active.open = true
    html.preview.blur.src = active.image
    html.preview.image.src = active.image
    html.preview.title.innerText = active.title
    html.preview.subtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
    html.preview.description.innerText = active.description
  }
}
