import { AppState } from "../AppState.js";
// import { Jumble } from "../models/Jumbles.js/index.js";
import { setHTML } from "../utils/Writer.js";

function _drawJumbles() {
    const jumbles = AppState.jumbles
    // console.log('jumbles', jumbles);
    let content = ''
    jumbles.forEach(jumble => content += jumble.jumbleCard)
    setHTML('jumble', content)
}

function _drawActiveJumble() {
    const activejumble = AppState.activeJumble

}


export class JumblesController {
    constructor() {
        _drawJumbles()
    }



}