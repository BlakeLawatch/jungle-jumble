import { AppState } from "../AppState.js";





class JumbleService {
    setActiveJumble(data) {
        const activeJumble = AppState.jumbles.find(jumbleFile => jumbleFile.name == data)
        AppState.activeJumble = activeJumble
        console.log('it works', data)
    }
}


export const jumbleService = new JumbleService