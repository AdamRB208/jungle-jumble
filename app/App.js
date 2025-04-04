import { JumblesController } from "./controllers/JumbleController.js"
import { router } from "./utils/router-config.js"

const USE_ROUTER = false

class App {

  JumblesController = new JumblesController()
  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}

const app = new App()
window.app = app

// window['app'] = new App()


