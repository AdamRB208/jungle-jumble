import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { setHTML } from "../utils/Writer.js"


export class JumblesController {
  constructor() {
    console.log('Jumbles Controller Loaded!')
    console.log('Jumbles Controller', AppState.Jumbles)
    AppState.on('activeJumble', this.drawActiveJumble)
    this.drawActiveJumble()
    this.drawJumbles()
  }

  drawActiveJumble() {
    if (AppState.activeJumble == null) {
      setHTML('jumble-game', Jumble.placeHolderTemplate)
    }
    else {
      setHTML('jumble-game', AppState.activeJumble.gameTemplate)
      document.getElementById('jumble-game-input').focus()
    }
  }

  drawJumbles() {
    const jumbles = AppState.Jumbles
    let jumblesContent = ''
    jumbles.forEach(jumble => jumblesContent += jumble.listTemplate)
    const jumblesElem = document.getElementById('jumbles-list')
    jumblesElem.innerHTML = jumblesContent
  }




}