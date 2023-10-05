import { AppState } from "../AppState.js";





class JumbleService {
    setActiveJumble(data) {
        const activeJumble = AppState.jumbles.find(jumbleFile => jumbleFile.id == data)
        console.log(activeJumble, 'active jumble')
        AppState.activeJumble = activeJumble
        console.log('it works', data)
    }
}


export const jumbleService = new JumbleService