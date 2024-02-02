import {html} from './htmlReferences.js'
import {matches, page} from './scripts.js'
import {books, BOOKS_PER_PAGE, authors} from './data.js'

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
