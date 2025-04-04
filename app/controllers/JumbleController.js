import { AppState } from "../AppState.js"


export class JumblesController {
  constructor() {
    console.log('Jumbles Controller Loaded!')
    console.log('Jumbles Controller', AppState.Jumbles)
    this.drawJumbles()
  }

  drawJumbles() {
    const jumbles = AppState.Jumbles
    let jumblesContent = ''
    jumbles.forEach(jumble => jumblesContent += jumble.listTemplate)
    const jumblesElem = document.getElementById('jumbles-list')
    jumblesElem.innerHTML = jumblesContent
  }




}