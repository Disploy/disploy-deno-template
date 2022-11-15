import type { ChatInputInteraction, Command } from "disploy";

const Ping: Command = {
  name: "ping",
  description: "Ping the bot",

  run(interaction: ChatInputInteraction) {
    interaction.reply({
      content: "Pong!",
    });
  },
};

export default Ping;
