import {LitElement, css, html} from 'lit'

export class TallyApp extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    body {
      background-color: #aaa1c8ff;
    }

    h1 {
      text-align: center;
      font-size: 3rem;
      font-family: 'Courier New', Courier, monospace;
    }

    .controls {
      display: flex;
    }

    .count {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 4rem;
      font-weight: 900;
      border-width: 0;
      border: 4px;
      border-color: black;
      background-color: #967aa1ff;
    }
  `
  static properties = {
    count: {type: Number},
    MAX: {type: Number},
    MIN: {type: Number},
  }

  constructor() {
    super()
    this.count = 0
    this.MAX = 10
    this.MIN = -10
  }

  addCount() {
    if (this.count < this.MAX) {
      this.count + 1
    }
  }

  subtractCount() {
    if (this.count > this.MIN) {
      this.count - 1
    }
  }
  render() {
    return html`
      <div>
        <h1>Tally App</h1>
        <input class="count" readonly value=${this.count} />
        <div id="tallyNumber_actions">
          <button
            class="controls"
            @click=${this.addCount}
            ?disabled=${this.count >= this.MAX}
          >
            +
          </button>
          <button
            class="controls"
            @click=${this.subtractCount}
            ?disabled=${this.count <= this.MIN}
          >
            -
          </button>
        </div>
      </div>
    `
  }
}

customElements.define('tally-app', TallyApp)
