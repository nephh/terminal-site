adventureCommands = {
  quit: quit,
  q: quit,
}

export default async function adventure() {
    // this.read("Enter your name: ", (name) => {
    //   playerName = name;
    //   this.echo("Welcome to Astaria, " + playerName, { typing: true, delay: 50 });
    // });
  this.push(adventureCommands, {
    name: "adventure",
    prompt: "adventure@nephh.io ",
    onStart: function () {
      this.clear();
      this.echo('Welcome adventurer!')
    },
  });
}

// Quit the adventure interpreter
function quit() {
  this.pop();
}