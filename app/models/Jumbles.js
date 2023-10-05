import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get ListTemplate() { // a basic list template to get drawing
    return `<li>${this.name}</li>`
  }


  get jumbleCard() {
    return `
    <section class="row">
      <div class="col-12">
        <p role= "button" onclick= "app.JumblesController.setActiveJumble()">${this.name}</p>
        <p>${this.body}</p>
        <p>${this.fastestTime}</p>
        <p>${this.startTime}</p>
        <p>${this.endTime}</p>
      </div>
    </section>`
  }

}



//   get activeJumbleCard() {
//     return `
//     <div class="col-4">
//       <button onclick="app.JumblesController.setActiveJumble(${this.name})" class="btn btn-success">Pick Me</button>
//     </div>`
//   }
// }