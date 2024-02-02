import {html} from './htmlReferences.js'
import {genres, authors} from './data.js'

export const loadGenresAuthors = () => {
  const genreHtml = document.createDocumentFragment()
  const firstGenreElement = document.createElement('option')
  firstGenreElement.value = 'any'
  firstGenreElement.innerText = 'All Genres'
  genreHtml.appendChild(firstGenreElement)
  //creates all other genres options
  for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    genreHtml.appendChild(element)
  }

  html.search.genres.appendChild(genreHtml)
  //Creates the first option for the author
  const authorsHtml = document.createDocumentFragment()
  const firstAuthorElement = document.createElement('option')
  firstAuthorElement.value = 'any'
  firstAuthorElement.innerText = 'All Authors'
  authorsHtml.appendChild(firstAuthorElement)
  //creates all other author options
  for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    authorsHtml.appendChild(element)
  }

  html.search.authors.appendChild(authorsHtml)
}
