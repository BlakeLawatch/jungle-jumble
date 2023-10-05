import { AppState } from "../AppState.js";





class JumbleService {
    setActiveJumble(jumbleId) {
        const activeJumble = AppState.jumbles.find(jumbleFile => jumbleFile.id == jumbleId)
        AppState.activeJumble = activeJumble
        console.log('it works', jumbleId)
    }
}


export const jumbleService = new JumbleService