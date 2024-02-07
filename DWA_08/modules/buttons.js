import {html} from './htmlReferences.js'

/**
 * All the event listeners for the buttons in the app
 * These control the opening and closing of overlays in the app
 */
export const overlayButtons = () => {
  //SEARCH CANCEL
  html.search.cancelButton.addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = false
  })
  //SETTINGS CANCEL
  html.settings.cancelButton.addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false
  })
  // SEARCH ICON
  html.header.search.addEventListener('click', () => {
    html.search.overlay.open = true
    html.search.title.focus()
  })
  //SETTINGS ICON
  html.header.settings.addEventListener('click', () => {
    html.settings.overlay.open = true
  })
  //PREVIEW CLOSE BUTTON
  html.preview.closeButton.addEventListener('click', () => {
    html.preview.active.open = false
  })
}
