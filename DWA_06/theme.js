import {matches} from './scripts.js'
import {html} from './htmlReferences.js'

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
