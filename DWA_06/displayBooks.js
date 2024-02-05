// ts-check
import {matches} from './scripts.js'
import {BOOKS_PER_PAGE, authors} from './data.js'
import {html} from './htmlReferences.js'

/**
 * This funtions is responsible for loading the first 36 books seen by the user on the app
 * The function loops over the matches( books ) and loads the different elements to the created DOM document.
 * @return {void}
 */
export const first36Books = () => {
  const starting = document.createDocumentFragment()
  for (const {author, id, image, title} of matches.slice(0, BOOKS_PER_PAGE)) {
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

    starting.appendChild(element)
  }
  html.list.items.appendChild(starting)
}
