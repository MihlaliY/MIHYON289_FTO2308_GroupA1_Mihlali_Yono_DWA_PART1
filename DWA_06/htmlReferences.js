export const html = {
  header: {
    search: document.querySelector('[data-header-search]'),
    settings: document.querySelector('[data-header-settings]'),
  },

  list: {
    items: document.querySelector('[data-list-items]'),
    message: document.querySelector('[data-list-message]'),
    button: document.querySelector('[data-list-button]'),
  },

  preview: {
    active: document.querySelector('[data-list-active]'),
    blur: document.querySelector('[data-list-blur]'),
    image: document.querySelector('[data-list-image]'),
    title: document.querySelector('[data-list-title]'),
    subtitle: document.querySelector('[data-list-subtitle]'),
    description: document.querySelector('[data-list-description]'),
    closeButton: document.querySelector('[data-list-close]'),
  },

  search: {
    overlay: document.querySelector('[data-search-overlay]'),
    form: document.querySelector('[data-search-form]'),
    title: document.querySelector('[data-search-title]'),
    genres: document.querySelector('[data-search-genres]'),
    authors: document.querySelector('[data-search-authors]'),
    cancelButton: document.querySelector('[data-search-cancel]'),
  },

  settings: {
    overlay: document.querySelector('[data-settings-overlay]'),
    form: document.querySelector('[data-settings-form]'),
    theme: document.querySelector('[data-settings-theme]'),
    cancelButton: document.querySelector('[data-settings-cancel]'),
  },
}
