import { generateId } from "../utils/GenerateId.js";


export class Jumble {
  /**
   * 
   * @param {{ name: string; body:string; fastestTime?: number}} data 
   */
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.fastestTime = data.fastestTime || Infinity
    this.startTime = 0
    this.endTime = null
  }

  get listTemplate() {
    return /*html*/`
      <div class="d-md-flex justify-content-between align-items-center mb-2">
        <div>
          <button onclick="app.JumblesController.setActiveJumble('${this.id}')" class="btn btn-warning fw-bold mt-2 ms-2" type="button" title="${this.startButtonTitle}">
            start
          </button>
          <div class="ms-2 mt-1">${this.name}</div>
        </div>
        <div class="${this.fastestTime == Infinity ? 'd-none' : ''}">
          <span class="fw-bold me-2" title="Fastest time is ${this.fastestTimeInSeconds}">${this.fastestTimeInSeconds}</span>
          <span class="fw-bold">${this.fastestWordsPerMinute.toFixed(1)} WPM</span>
        </div>
      </div>
    `
  }

  get gameTemplate() {
    return /*html*/ `
      <div class="jumbles-card mb-4">
        <h3 class="d-flex justify-content-between">
          <span>${this.name}</span>
          <span class="${this.fastestTime == Infinity ? 'd-none' : ''}">Fastest Time ${this.fastestTimeInSeconds.toFixed(1)}s</span>
        </h3>
        <p>${this.body}</p>
      </div>
      <div class="jumble-card">
        <form onsubmit="app.JumblesController.showJumbleInput()">
          <div class="form-floating mb-2">
            <textarea class="form-control" placeholder="Start Typing!!!!" id="jumble-game-input" name="jumbleGameBody"></textarea>
            <label for="floatingTextarea">Start Typing!!!</label>
          </div>
          <button class="btn btn-warning w-100 mb-2" type="button">Submit</button>
        </form>
      </div>
    `
  }


  static get placeHolderTemplate() {
    return `
      <marquee behavior="alternate" direction="up" class="h-100">
        <marquee behavior="alternate" direction="left" scrollamount="50">
          <span class="display-1">${this.randomEmoji}</span>
        </marquee>
      </marquee>
    `
  }

  static get randomEmoji() {
    const emojis = [
      '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🫏', '🐒', '🐛', '🦋',
      '🐌', '🐞', '🐜', '🦟', '🦗', '🦂', '🦀', '🦞', '🦐', '🦑',
      '🐙', '🐠', '🐟', '🐡', '🐬', '🐳', '🐋', '🐊', '🐢', '🦎',
      '🐍', '🦖', '🦕', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🦏',
      '🦛', '🐘', '🦒', '🦘', '🦥', '🦦', '🦨', '🦡', '🐇', '🐿️',
      '🦔', '🐝'
    ]
    const randomIndex = Math.floor(Math.random() * emojis.length)
    return emojis[randomIndex]
  }

  get fastestTimeInSeconds() {
    return this.fastestTime / 1000
  }

  get wordCount() {
    return this.body.split('').length
  }

  get fastestWordsPerMinute() {
    return this.wordCount * 60 / this.fastestTimeInSeconds
  }

  get startButtonTitle() {
    return `Start the ${this.name}! This Jumble has a total of ${this.wordCount} words!`
  }

}