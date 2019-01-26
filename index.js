// write a constructor function called `BoardMember` that sets the following properties: `name`, `homeState`, and `training`.

// Add following methods to the class:
// + `veto` — returns `No, I must disagree`
// + `approve` — returns `You can do that!`
// + `doCharity` — returns `I like to help people.`
// + `releasePressStatement` — returns `You will see great things from Scuber.`
// + `sayHi` — returns `"Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.`

function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function() {
    console.log("No, I must disagree");
  }
  // this.approve = function() {
  //   console.log("You can do that!");
  // }
  // this.doCharity = function() {
  //   console.log("I like to help people.");
  // }
  
}