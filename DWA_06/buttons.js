import {html} from './htmlReferences.js'

export const settingsSubmitButton = (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const {theme} = Object.fromEntries(formData)

  if (theme === 'night') {
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255')
    document.documentElement.style.setProperty('--color-light', '10, 10, 20')
  } else {
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20')
    document.documentElement.style.setProperty('--color-light', '255, 255, 255')
  }

  html.settings.overlay.open = false
}

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
