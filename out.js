(() => {
  // adventure.js
  adventureCommands = {
    quit,
    q: quit
  };
  async function adventure() {
    this.push(adventureCommands, {
      name: "adventure",
      prompt: "adventure@nephh.io ",
      onStart: function() {
        this.clear();
        this.echo("Welcome adventurer!");
      }
    });
  }
  function quit() {
    this.pop();
  }

  // script.js
  commands = {
    help: function() {
      this.echo("enter any of the following commands");
    },
    about: function() {
      this.echo("this is about");
    },
    test: function() {
      this.echo('[[;{"style": "--color: red"};]Hello World]');
    },
    story: async function() {
      await this.echo(story, { typing: true, delay: 50 });
    },
    adventure,
    cat: function() {
      this.echo('<img src="http://cataas.com/cat"/>', { raw: true });
    },
    catgif: function() {
      this.echo(`<img src="http://cataas.com/cat/gif"/>`, { raw: true });
    }
  };
  var term = $("#terminal").terminal(commands, {
    prompt: function() {
      return `[[;#98fb98;]guest@nephh.io /$ ]`;
    },
    greetings: ascii,
    onInit: async function(terminal) {
      await terminal.echo(
        `welcome to my site, enter [[;;;glow]help] to see some options`,
        { typing: true, delay: 50 }
      );
    },
    keymap: {
      "CTRL+R": function(e, original) {
        return;
      }
    },
    onClear: function(terminal) {
      terminal.echo(welcome());
      terminal.echo(help());
    },
    onBlur: function(terminal) {
      return false;
    }
  });
  async function welcome() {
    return ascii;
  }
  async function help() {
    return `welcome to my site, enter help to see some options`;
  }
  var script_default = commands;
})();
