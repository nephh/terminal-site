commands = {
  help: function () {
    this.echo("enter any of the following commands");
  },
  about: function () {
    this.echo("this is about");
  },
  test: function () {
    this.echo('[[;{"style": "--color: red"};]Hello World]');
  },
  story: async function () {
    await this.echo(story, { typing: true, delay: 50 });
  },
  adventure: adventure, cat: function () {
    this.echo('<img src="http://cataas.com/cat"/>', { raw: true });
  },
  catgif: function () {
    this.echo(`<img src="http://cataas.com/cat/gif"/>`, { raw: true });
  },
};

async function getAPI(input) {
  let requestURL = "";

  switch (input) {
    case "cat":
      requestURL = "https://cataas.com/cat";
      break;
  }
  const response = await fetch(requestURL);
  if (response.status === 200) {
    // const cat = await response.json();
    console.log(response);
  }
}

const term = $("#terminal").terminal(commands, {
  prompt: function () {
    return "[[;" + "#98fb98" + ";]" + `guest@nephh.io /$ ` + "]";
  },
  greetings: ascii,
  onInit: async function (terminal) {
    await terminal.echo(
      `welcome to my site, enter [[;;;glow]help] to see some options`,
      { typing: true, delay: 50 }
    );
  },
  keymap: {
    "CTRL+R": function (e, original) {
      return;
    },
  },
  onClear: function (terminal) {
    terminal.echo(welcome());
    terminal.echo(help());
  },
  onBlur: function (terminal) {
    return false;
  },
});

async function welcome() {
  return ascii;
}

async function help() {
  return `welcome to my site, enter help to see some options`;
}

export default commands;
import adventure from "./adventure";
