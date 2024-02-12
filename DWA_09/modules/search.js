import {html} from './htmlReferences.js'
import {matches, page} from './scripts.js'
import {books, BOOKS_PER_PAGE, authors} from './data.js'

/**
 * This function has an event listener with an anonymous function that fires when the submit button of the
 * search form is clicked
 * Depending on what the user searches for the document will show results if not found a message will be displayed to the user.
 */
export const searchThroughBooks = () => {
  html.search.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []

    for (const book of books) {
      let genreMatch = filters.genre === 'any'

      for (const singleGenre of book.genres) {
        if (genreMatch) break
        if (singleGenre === filters.genre) {
          genreMatch = true
        }
      }

      if (
        (filters.title.trim() === '' ||
          book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
        (filters.author === 'any' || book.author === filters.author) &&
        genreMatch
      ) {
        result.push(book)
      }
    }

    if (result.length < 1) {
      html.list.message.classList.add('list__message_show')
    } else {
      html.list.message.classList.remove('list__message_show')
    }

    html.list.items.innerHTML = ''
    //loadBooks("newItems", result)
    const newItems = document.createDocumentFragment()
    // SEARCH RESULTS PREVIEW
    for (const {author, id, image, title} of result.slice(0, BOOKS_PER_PAGE)) {
      const element = document.createElement('button')
      element.classList = 'preview'
      element.setAttribute('data-preview', id)

      element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

      newItems.appendChild(element)
    }

    html.list.items.appendChild(newItems)
    html.list.button.disabled = matches.length - page * BOOKS_PER_PAGE < 1
    // SEARCH SHOW MORE BUTTONS
    html.list.button.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})</span>
    `
    // SCROLLING BEHAVIOR
    window.scrollTo({top: 0, behavior: 'smooth'})
    html.search.overlay.open = false
  })
}

/**
 * This function is responsible for the books shown when the search button is clicked
 * This function laods books to the DOM according to the search results.
 */
export const showMoreBooksSearch = () => {
  const fragment = document.createDocumentFragment()

  for (const {author, id, image, title} of matches.slice(
    page * BOOKS_PER_PAGE,
    (page + 1) * BOOKS_PER_PAGE
  )) {
    const element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)

    element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

    fragment.appendChild(element)
  }

  html.list.items.appendChild(fragment)
  //   page += 1
}
