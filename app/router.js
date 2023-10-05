import { AboutController } from "./controllers/AboutController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { JumblesController } from "./controllers/JumblesController.js";


export const router = [
  {
    path: '',
    controller: JumblesController,
    view: /*html*/`
    
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]