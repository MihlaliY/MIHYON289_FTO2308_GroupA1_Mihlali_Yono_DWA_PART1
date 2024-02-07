import {html} from './htmlReferences.js'
import {overlayButtons} from './buttons.js'
import {previewBook} from './previewBooks.js'
import {appendFirst36Books} from './displayBooks.js'
import {loadGenresAuthors} from './genreAndAuthorOptions.js'
import {books, BOOKS_PER_PAGE} from './data.js'
import {settingsSubmitButton, setTheme} from './theme.js'
import {searchThroughBooks, showMoreBooksSearch} from './search.js'

export let page = 1
export let matches = books

//show more button
html.list.button.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
html.list.button.disabled = matches.length - page * BOOKS_PER_PAGE > 0

html.list.button.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})</span>
`

appendFirst36Books()
loadGenresAuthors()
setTheme()
overlayButtons()
searchThroughBooks()
html.settings.form.addEventListener('submit', settingsSubmitButton)
html.list.button.addEventListener('click', showMoreBooksSearch)
html.list.items.addEventListener('click', previewBook)
