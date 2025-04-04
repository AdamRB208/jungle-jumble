import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { jumblesService } from "../services/JumbleService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"


export class JumblesController {
  constructor() {
    console.log('Jumbles Controller Loaded!')
    console.log('Jumbles Controller', AppState.Jumbles)
    AppState.on('activeJumble', this.drawActiveJumble)
    this.drawActiveJumble()
    this.drawJumbles()
    jumblesService.loadJumbles()
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

  /**
   * @param {string} jumbleId
   */
  setActiveJumble(jumbleId) {
    jumblesService.setActiveJumble(jumbleId)
  }

  createJumble() {
    event.preventDefault()
    const formElem = event.target
    const jumbleData = getFormData(formElem)
    jumblesService.createJumble(jumbleData)
    formElem.reset()
  }
}