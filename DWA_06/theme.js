import {html} from './htmlReferences.js'

/**
 * This function is responsible for the changing of the documents
 * depending on which theme is selceted the document will change accordingly
 * @param {Event} event - the event parameter is used in this function.
 */
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

/**
 * This function is responsible for matching the users preferred theme
 * If the user is currently in dark mode, the document will automatically match that theme
 * This function also checks what the selected theme is and changes the document elements accordingly
 */
export const setTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    html.settings.theme.value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255')
    document.documentElement.style.setProperty('--color-light', '10, 10, 20')
  } else {
    html.settings.theme.value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20')
    document.documentElement.style.setProperty('--color-light', '255, 255, 255')
  }
}
