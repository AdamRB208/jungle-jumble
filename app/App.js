import { JumblesController } from "./controllers/JumbleController.js"


class App {

  JumblesController = new JumblesController()

}

window['app'] = new App()


