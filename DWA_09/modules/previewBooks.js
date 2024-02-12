import {html} from './htmlReferences.js'
import {books, authors} from './data.js'

/**
 * A factory function that returns an object literal that update the DOM everytime a book element is clicked.
 *@returns {object} -returns an object literal with methods that load update the DOM
 */
const createBookPreview = (activeBook) => {
  return {
    openModal: () => {
      html.preview.active.open = true
    },
    applyPreviewBlurImage: (src) => {
      html.preview.blur.src = src
    },
    applyPreviewImage: (src) => {
      html.preview.image.src = src
    },
    applyPreviewTitle: (title) => {
      html.preview.title.innerText = title
    },
    applyPreviewSubtitle: (author, publishDate) => {
      html.preview.subtitle.innerText = `${authors[author]} (${new Date(publishDate).getFullYear()})`
    },
    applyPreviewDescription: (description) => {
      html.preview.description.innerText = description
    },
  }
}

/**
 * This function is responsible for the previewing of the books in the app
 * When a book is clicked a modal is displayed with an image of the book, a short description
 * and the date published.
 * @param {Event} event
 */
export const previewBook = (event) => {
  const pathArray = Array.from(event.path || event.composedPath())
  let activeBook = null

  for (const node of pathArray) {
    if (activeBook) break

    if (node?.dataset?.preview) {
      let result = null

      for (const singleBook of books) {
        if (result) break
        if (singleBook.id === node?.dataset?.preview) result = singleBook
      }

      activeBook = result
    }
  }

  if (activeBook) {
    const bookPreview = createBookPreview(activeBook)
    bookPreview.openModal()
    bookPreview.applyPreviewBlurImage(activeBook.image)
    bookPreview.applyPreviewImage(activeBook.image)
    bookPreview.applyPreviewTitle(activeBook.title)
    bookPreview.applyPreviewSubtitle(activeBook.author, activeBook.published)
    bookPreview.applyPreviewDescription(activeBook.description)
  }
}
