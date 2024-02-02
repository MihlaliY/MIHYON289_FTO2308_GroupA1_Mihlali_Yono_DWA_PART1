import {html} from './htmlReferences.js'
import {books, authors} from './data.js'

//Preview code for the buttons / books
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
