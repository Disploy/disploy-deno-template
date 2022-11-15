import { App } from "disploy";
import { config as loadEnv } from "std/dotenv/mod.ts";
import commands from "./commands/commands.ts";

await loadEnv({
  export: true,
});

const { clientId, token, publicKey } = {
  clientId: Deno.env.get("DISCORD_CLIENT_ID"),
  token: Deno.env.get("DISCORD_TOKEN"),
  publicKey: Deno.env.get("DISCORD_PUBLIC_KEY"),
};

if (!clientId || !token || !publicKey) {
  throw new Error("Missing environment variables");
}

export const app = new App({
  logger: {
    debug: true,
  },
});

app.start({
  clientId,
  token,
  publicKey,
});

for (const command of commands) {
  app.commands.registerCommand(command);
}
