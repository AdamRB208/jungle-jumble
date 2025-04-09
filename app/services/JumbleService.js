import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { loadState, saveState } from "../utils/Store.js"


class JumblesService {


  /**
   * @param {string} jumbleText
   */
  showJumbleInput(jumbleText) {
    if (jumbleText != AppState.activeJumble.body) {
      return
    }
    this.endGame()
  }


  /**
   * @param {string} jumbleId
  */
  setActiveJumble(jumbleId) {
    const foundJumble = AppState.Jumbles.find(jumble => jumble.id == jumbleId)
    AppState.activeJumble = foundJumble
    this.startGame()
  }

  startGame() {
    AppState.activeJumble.startTime = Date.now()
    console.log('game started')
  }

  endGame() {
    console.log('game ended')
    const activeJumble = AppState.activeJumble
    const timeElapsed = Date.now() - activeJumble.startTime
    if (timeElapsed < activeJumble.fastestTime) {
      activeJumble.fastestTime = timeElapsed
      this.saveJumbles()
    }
  }


  createJumble(jumbleData) {
    const jumble = new Jumble(jumbleData)
    AppState.Jumbles.push(jumble)
    this.saveJumbles()
  }

  saveJumbles() {
    saveState('jumbles', AppState.Jumbles)
  }

  loadJumbles() {
    console.log('loaded jumbles')
    const jumbles = loadState('jumbles', [Jumble])
    if (jumbles.length == 0) {
      AppState.emit('jumbles')
    }
    else {
      AppState.Jumbles = jumbles
    }
  }

}

export const jumblesService = new JumblesService()