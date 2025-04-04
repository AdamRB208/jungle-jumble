import { JumblesController } from "./controllers/JumbleController.js"


class App {

  JumblesController = new JumblesController()
}

const app = new App()

window['app'] = new App()


