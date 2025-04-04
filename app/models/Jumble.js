import { generateId } from "../utils/GenerateId.js";


export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get listTemplate() {
    return /*html*/
    `
      <li>${this.name}</li>
      <li>${this.body}</li>
    `
  }


}