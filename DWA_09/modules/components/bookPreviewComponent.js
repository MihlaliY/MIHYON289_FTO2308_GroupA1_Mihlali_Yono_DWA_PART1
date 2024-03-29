const template = document.createElement('template')

template.innerHTML = /* html */ ` 
<style>
    .overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-width: 0;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    animation-name: enter;
    animation-duration: 0.6s;
    z-index: 10;
    background-color: rgba(var(--color-light), 1);
    }

    .overlay__title {
    padding: 1rem 0 0.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.1px;
    max-width: 25rem;
    margin: 0 auto;
    color: rgba(var(--color-dark), 0.8)
    }

    .overlay__blur {
    width: 100%;
    height: 200px;
    filter: blur(10px);
    opacity: 0.5;
    transform: scale(2);
    }

    .overlay__image {
    max-width: 10rem;
    position: absolute;
    top: 1.5m;
    left: calc(50% - 5rem);
    border-radius: 2px;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    }

    .overlay__data {
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
    }

    .overlay__data_secondary {
    color: rgba(var(--color-dark), 0.6)
    }

    .overlay__content {
    padding: 2rem 1.5rem;
    text-align: center;
    padding-top: 3rem;
    }

    .overlay__preview {
    overflow: hidden;
    margin: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    </style>
    
    <dialog class="overlay" data-list-active>
      <div class="overlay__preview">
        <img class="overlay__blur" data-list-blur src="" />
        <img class="overlay__image" data-list-image src="" />
      </div>
      <div class="overlay__content">
        <h3 class="overlay__title" data-list-title></h3>
        <div class="overlay__data" data-list-subtitle></div>
        <p
          class="overlay__data overlay__data_secondary"
          data-list-description
        ></p>
      </div>

      <div class="overlay__row">
        <button class="overlay__button overlay__button_primary" data-list-close>
          Close
        </button>
      </div>
    </dialog>
`

class BookPreview extends HTMLElement {
  inner = this.attachShadow({mode: 'closed'})

  constructor() {
    super()
    const {content} = template
    this.inner.appendChild(content.cloneNode(true))
  }
}

customElements.define('book-preview', BookPreview)
